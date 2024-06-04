from openai import OpenAI

api_key = "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"

def transcrever_audio(caminho_audio, api_key):
    # Função para transcrever áudio usando a API da OpenAI
    try:
        client = OpenAI(api_key=api_key)
        with open(caminho_audio, "rb") as audio_file:
            transcription = client.audio.transcriptions.create(
                file=audio_file,
                model="whisper-1",
                response_format="verbose_json",
                timestamp_granularities=["segment"]
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
