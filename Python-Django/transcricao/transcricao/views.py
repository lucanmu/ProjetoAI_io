from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import json
from pydub import AudioSegment
from threading import Thread
from openai import OpenAI
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login


from .transcricao_audio import transcrever_audio

@csrf_exempt
def upload_audio(request):
    if request.method == 'POST' and request.FILES.get('audio_file'):
        audio_file = request.FILES['audio_file']

        # Verificar o tamanho do arquivo
        if audio_file.size > 25 * 1024 * 1024:  # 25 MB em bytes
            # Dividir e transcrever o áudio em paralelo
            transcribe_and_send_partials(audio_file)
            return JsonResponse({'message': 'Transcrição em andamento...'})
        else:
            # Transcrever o áudio e enviar a transcrição completa
            transcription = transcrever_audio_instantly(audio_file)
            if transcription:
                return JsonResponse({'transcription': transcription})
            else:
                return JsonResponse({'error': 'Erro ao transcrever o áudio'}, status=500)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)

def transcribe_and_send_partials(audio_file):
    # Carregar o arquivo de áudio
    song = AudioSegment.from_file(audio_file)

    # Definir o tamanho máximo do segmento (25 MB)
    max_size = 25 * 1024 * 1024  # 25 MB em bytes

    # Dividir o áudio em pedaços menores
    segments = []
    while len(song) > max_size:
        segments.append(song[:max_size])
        song = song[max_size:]
    segments.append(song)  # Adicionar o último segmento

    # Inicializar uma lista para armazenar as transcrições parciais
    partial_transcriptions = []

    # Função para transcrever cada segmento e enviar as transcrições parciais
    def transcribe_segment(segment):
        caminho_temporario = 'temp_audio.wav'
        with open(caminho_temporario, 'wb') as f:
            segment.export(f, format="wav")
        transcription = transcrever_audio(caminho_temporario, api_key="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")
        os.remove(caminho_temporario)
        if transcription:
            partial_transcriptions.append(transcription)
            # Enviar a transcrição parcial para o frontend
            send_partial_transcription(transcription)

    # Criar e iniciar threads para transcrever cada segmento
    threads = []
    for segment in segments:
        thread = Thread(target=transcribe_segment, args=(segment,))
        thread.start()
        threads.append(thread)

    # Aguardar até que todas as threads terminem
    for thread in threads:
        thread.join()

    # Enviar todas as transcrições parciais e agregadas para o frontend
    send_aggregated_transcriptions(partial_transcriptions)

def send_partial_transcription(transcription):
    # Envie a transcrição parcial para o frontend (implemente conforme necessário)
    pass

def send_aggregated_transcriptions(transcriptions):
    # Agregue as transcrições parciais e envie para o frontend (implemente conforme necessário)
    pass

def transcrever_audio_instantly(audio_file):
    caminho_temporario = 'temp_audio.wav'
    with open(caminho_temporario, 'wb') as f:
        for chunk in audio_file.chunks():
            f.write(chunk)
    transcription = transcrever_audio(caminho_temporario, api_key="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")
    os.remove(caminho_temporario)
    return transcription if transcription else None

@csrf_exempt
def process_action(request):
    if request.method == 'POST':
        # Recuperando os dados da solicitação POST
        data = json.loads(request.body.decode('utf-8'))
        action = data.get('action')
        transcription = data.get('transcription')

        # Executando a ação usando a OpenAI
        client = OpenAI(api_key="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")
        MODEL = "gpt-4-0125-preview"

        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {"role": "system", "content": f"{action} no seguinte texto:"},
                {"role": "user", "content": transcription},
            ],
            temperature=0,
        )

        result = response.choices[0].message.content

        return JsonResponse({'result': result}, safe=False)
        
    return JsonResponse({'error': 'Method not allowed'}, status=405)

#==============================CRIAÇÃO DE DOC VIA FORMULÁRIO==============================


@csrf_exempt
def projeto_form(request):
    
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        mensagem = data.get('mensagem')

        # Definindo sua chave de API
        client = OpenAI(api_key="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")
        MODEL = "gpt-4-0125-preview"

        # Salvando o JSON recebido em um arquivo
        with open('dados_recebidos.json', 'w') as f:
            json.dump(data, f, indent=4)

        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {"role": "system", "content": "Se baseando nas seguintes informações:"},
                {"role": "user", "content": mensagem},
            ],
            temperature=0,
        )

        result_projeto_form = response.choices[0].message.content

        # Salvando o resultado em um arquivo JSON
        with open('resposta_chatgpt.json', 'w') as f:
            json.dump({'resposta': result_projeto_form}, f, indent=4)

        return JsonResponse({'resposta': result_projeto_form})

    return JsonResponse({'error': 'Método não permitido'}, status=405)


#=====================Login#=====================
