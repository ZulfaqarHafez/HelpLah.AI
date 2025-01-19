from flask import Flask, render_template, request, jsonify, send_file
import requests 
from gtts import gTTS
import os
from io import BytesIO
import re
import base64

app = Flask(__name__)

# Google Colab URL
COLLAB_URL = "https://39dc-34-16-246-36.ngrok-free.app/process"  # The URL where your Colab is hosted

def is_chinese(text):
    # Regular expression to match Chinese characters
    return bool(re.search('[\u4e00-\u9fff]', text))

@app.route('/')
def index():
    return render_template('chatbot.html')

@app.route('/process_voice', methods=['POST'])
def process_voice():
    data = request.get_json()
    speech_text = data.get('speechText', '')  # Receive transcribed speech text from frontend

    if speech_text:
        # Send the transcribed speech text to Google Colab
        response = requests.post(COLLAB_URL, json={'text': speech_text})
        if response.status_code == 200:
           
            processed_text = response.json().get("processedText", "")
            
            if is_chinese(processed_text) is True:
                tts = gTTS(text=processed_text, lang='zh-cn')
            else:
                tts = gTTS(text=processed_text, lang='en',tld='co.in')

          # Save the speech to a temporary file on the disk
            temp_filename = "temp_audio.mp3"
            tts.save(temp_filename)  # Save to a temporary file

            # Read the temporary file into a BytesIO object (in-memory file)
            with open(temp_filename, 'rb') as f:
                audio_file = BytesIO(f.read())
            
            # Clean up the temporary file
            os.remove(temp_filename)

            audio_base64 = base64.b64encode(audio_file.getvalue()).decode('utf-8')

            print(processed_text)

                # Return the speech text and audio as base64 in JSON
            return jsonify({
                "speechText": processed_text,
                "audioData": audio_base64
            })
                    
            # Send the audio file back as a response (MP3 format)
            # return send_file(audio_file, mimetype='audio/mp3', as_attachment=False)
        else:
            return jsonify({"message": "Failed to process text in Google Colab"})
    else:
        return jsonify({"message": "No speech text received"})

if __name__ == '__main__':
    app.run(debug=True)
