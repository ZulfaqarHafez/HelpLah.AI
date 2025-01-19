let recognition;
let selectedLanguage = 'en-US'; // Default to English

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
    recognition = new speechRecognition();
    recognition.continuous = false; // Listen continuously
    recognition.lang = selectedLanguage; // Set language to English or Mandarin

    // Start recording when the button is clicked
    function startRecording() {
        recognition.start();
        // document.getElementById('transcript').innerText = "Listening...";
    }

    function updateLanguage() {
        selectedLanguage = document.getElementById('language').value;
        recognition.lang = selectedLanguage; // Update language for recognition
    }

    // Process the speech result and send it to the backend
    recognition.onresult = function(event) {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        console.log(transcript)
        document.getElementById('text-display').innerText = transcript;
        sendTextToBackend(transcript); // Send the speech text to Flask backend
        stopRecording()
    };

    function stopRecording() {
        if (isRecognizing) {
            recognition.stop(); // Stop the ongoing recognition session
            isRecognizing = false; // Set the state to stopped
        
        }
    }

      // Handle any errors that occur during recognition
      recognition.onerror = function(event) {
        console.error("Error occurred in speech recognition: ", event.error);
     
    };

} else {
    alert("Web Speech API not supported in this browser.");
}

// Send the text to the backend (Flask) for processing
function sendTextToBackend(text) {
    fetch('/process_voice', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'  // Ensure the content type is JSON
    },
    body: JSON.stringify({ speechText: text })  // Sending the text to the backend
})
.then(response => response.json())  // Parse the JSON response
.then(data => {
    // Extract the speech text and audio data from the response
    const speechText = data.speechText;
    const audioBase64 = data.audioData;

    // Create a Blob from the base64 string
    const audioBlob = new Blob([new Uint8Array(atob(audioBase64).split("").map(c => c.charCodeAt(0)))], { type: 'audio/mp3' });
    
    // Create an audio URL from the Blob
    const audioUrl = URL.createObjectURL(audioBlob);
    
    // Set the audio player's source to the generated audio URL
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = audioUrl;
    
    // Optionally, display the speech text in the UI
    const textDisplay = document.getElementById('text-display');
    textDisplay.innerText = speechText;
    
    // Play the audio
    audioPlayer.play();
})
.catch(error => console.error('Error sending data to backend:', error));
}
