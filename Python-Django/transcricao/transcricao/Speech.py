import pyaudio
import wave
import os
import json
from openai import OpenAI

def gravar_audio(nome_arquivo_base, duracao_segundos, tamanho_max_bytes=24*1024*1024, taxa_amostragem=44100, chunk=1024, formato=pyaudio.paInt16, canais=1):
    # Função para gravar áudio
    audio = pyaudio.PyAudio()
    frames = []
    tamanho_bytes = 0
    arquivo_num = 1

    try:
        while True:
            stream = audio.open(
                format=formato,
                channels=canais,
                rate=taxa_amostragem,
                input=True,
                output=True,
                frames_per_buffer=chunk
            )

            duracao_total = 0

            while duracao_total < duracao_segundos:
                bloco = stream.read(chunk)
                frames.append(bloco)
                duracao_total += len(bloco) / (taxa_amostragem * chunk)
                tamanho_bytes += len(bloco)
                if tamanho_bytes >= tamanho_max_bytes:
                    salvar_audio(f"{nome_arquivo_base}_{arquivo_num}.wav", frames)
                    frames = []
                    tamanho_bytes = 0
                    arquivo_num += 1

            stream.stop_stream()
            stream.close()

    except KeyboardInterrupt:
        salvar_audio(f"{nome_arquivo_base}_{arquivo_num}.wav", frames)
        audio.terminate()

def salvar_audio(nome_arquivo, frames):
    # Função para salvar áudio em arquivo WAV
    with wave.open(nome_arquivo, "wb") as arquivo_final:
        arquivo_final.setnchannels(1)
        arquivo_final.setsampwidth(pyaudio.PyAudio().get_sample_size(pyaudio.paInt16))
        arquivo_final.setframerate(44100)
        arquivo_final.writeframes(b"".join(frames))

def transcrever_audio(caminho_audio, api_key):
    # Função para transcrever áudio usando a API da OpenAI
    client = OpenAI(api_key=api_key)
    try:
        with open(caminho_audio, "rb") as audio_file:
            transcription = client.audio.transcriptions.create(
                model="whisper-1",
                file=audio_file,
                response_format="text"
            )
            if isinstance(transcription, str):
                return transcription
            else:
                return transcription.text
    except KeyboardInterrupt:
        print("Transcrição interrompida pelo usuário.")
        return None
    except Exception as e:
        print("Ocorreu um erro na transcrição do áudio:", e)
        return None

def continuar_interacao(resposta_atual, response, respostas_antigas):
    # Função para continuar a interação com o modelo de chat GPT
    with open("resposta1.json", "r") as json_file:
        resposta1 = json.load(json_file)

    resposta1_str = resposta1

    resposta1 = resposta1_str

    api_key = "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"
    client = OpenAI(api_key=api_key)
    MODEL = "gpt-4-0125-preview"

    while True:
        resposta_usuario = input("Deseja fazer mais alguma coisa? (S/N) ").lower()

        if resposta_usuario == "s":
            acao = input("O que deseja fazer agora? ")

            texto_para_enviar = resposta1 + resposta_atual
            for resposta in respostas_antigas:
                texto_para_enviar += "\n" + resposta

            response = client.chat.completions.create(
                model=MODEL,
                messages=[
                    {"role": "system", "content": texto_para_enviar},
                    {"role": "user", "content": acao},
                ],
                temperature=0,
            )
            print(response.choices[0].message.content)

            with open("final.json", "w") as json_file:
                json.dump(response.choices[0].message.content, json_file)

            satisfacao_usuario = input("Você está satisfeito com a resposta? (S/N) ").lower()
            if satisfacao_usuario == "s":
                print("Obrigado! A interação foi concluída com sucesso.")

                with open("final.json", "w") as json_file:
                    json.dump(response.choices[0].message.content, json_file)

                break
            elif satisfacao_usuario == "n":
                respostas_antigas.append(response.choices[0].message.content)
                continue
            else:
                print("Entrada inválida. Por favor, responda 'S' ou 'N'.")

        elif resposta_usuario == "n":
            print("Obrigado! A interação foi concluída com sucesso.")

            with open("final.json", "w") as json_file:
                json.dump(response.choices[0].message.content, json_file)

            break
        else:
            print("Entrada inválida. Por favor, responda 'S' ou 'N'.")

def interagir_chatgpt(respostas_antigas):
    # Função principal para interação com o modelo de chat GPT
    with open("transcricoes.json", "r") as json_file:
        texto_transcrito = json.load(json_file).values()

    texto_transcrito_str = "\n".join(texto_transcrito)

    print("CONTEUDO DO ARQUIVO JASON:", texto_transcrito_str)

    acao = input("O que deseja fazer com o texto transcrito? ")

    api_key = "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"
    client = OpenAI(api_key=api_key)
    MODEL = "gpt-4-0125-preview"

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": acao},
            {"role": "user", "content": texto_transcrito_str},
        ],
        temperature=0,
    )

    print(response.choices[0].message.content)

    with open("resposta1.json", "w") as json_file:
        json.dump(response.choices[0].message.content, json_file)

    continuar_interacao(response.choices[0].message.content, response, respostas_antigas)

def consultar_arquivos_existente():
    # Função para consultar arquivos existentes e transcrever áudios
    transcricoes = {}
    for arquivo in os.listdir():
        if arquivo.endswith(".wav"):
            caminho_audio = os.path.join(os.getcwd(), arquivo)
            texto_transcrito = transcrever_audio(caminho_audio, api_key)
            if texto_transcrito:
                print(f"Transcrição de {arquivo}:")
                print(texto_transcrito)
                transcricoes[arquivo] = texto_transcrito
            else:
                print(f"Não foi possível transcrever {arquivo}.")

    salvar_transcricoes_json(transcricoes)

def iniciar_gravacao():
    # Função para iniciar a gravação de áudios
    try:
        gravar_audio(nome_arquivo_base, duracao_segundos)
    except KeyboardInterrupt:
        pass

    transcricoes = {}
    for arquivo in os.listdir():
        if arquivo.startswith(nome_arquivo_base) and arquivo.endswith(".wav"):
            caminho_audio = os.path.join(os.getcwd(), arquivo)
            texto_transcrito = transcrever_audio(caminho_audio, api_key)
            if texto_transcrito:
                print(f"Transcrição de {arquivo}:")
                print(texto_transcrito)
                transcricoes[arquivo] = texto_transcrito
            else:
                print(f"Não foi possível transcrever {arquivo}.")

    salvar_transcricoes_json(transcricoes)

def salvar_transcricoes_json(transcricoes):
    # Função para salvar as transcrições em um arquivo JSON
    with open("transcricoes.json", "w") as json_file:
        json.dump(transcricoes, json_file, indent=4)

    interagir_chatgpt([])  # Inicia a interação sem respostas anteriores

if __name__ == "__main__":
    api_key = "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"
    nome_arquivo_base = "gravacao"
    duracao_segundos = 10
    respostas_antigas = []  # Inicialmente, não há respostas antigas

    escolha = input("Deseja transcrever arquivos existentes (T) ou iniciar a gravação (G)? ").upper()
    if escolha == 'T':
        consultar_arquivos_existente()
    elif escolha == 'G':
        iniciar_gravacao()
    else:
        print("Escolha inválida.")
