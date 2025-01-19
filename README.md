# HelpLah.AI: AI Powered conversational bot

HelpLah.AI is a multilingual AI chatbot designed to address the increasing concerns of social isolation and loneliness among Singaporeans, as highlighted in a recent Institute of Policy Studies survey focusing on the youth. Built using the Flask framework and powered by the advanced Llama-2-7B-chat-GGML model, the chatbot proficiently communicates in both English and Mandarin. This enables it to reach a wide audience, providing empathetic support tailored to the nuances of each interaction.
<br><br>
The chatbot leverages the gtts (Google Text-to-Speech) library to deliver responses in a clear, natural-sounding voice, enhancing the engagement and effectiveness of its interactions. By facilitating meaningful conversations, HelpLah.AI helps users feel more connected and supported within their community, making mental health support accessible and impactful. This tool is pivotal in improving the mental well-being of Singaporeans, demonstrating the power of advanced technology in transforming mental health advocacy and support.
<br><br>

<h1>Prerequisites</h1>
1. 1 NGROK Token for use between Google Colab and local Flask App

<h2>Setup Instructions for local flask app and google colab</h2>
1. Create a python virtual environment, run the following command

```bash
python -m venv venv
```

2. Start the virtual environment, run the following command:

```bash
venv\Scripts\Activate
```
3. Install all packages from the requirements.txt file into the virtual environment, run the following command: (Install packages seperately if "module not found" error happens)

```bash
pip install -r requirements.txt
```
4. Access the Google Colab file  [Open in Google Colab](https://colab.research.google.com/drive/1q4HgHEb6NctgasFU2Gp3uKnMT5hEVZss?usp=sharing)

6. Run all code in order from top to bottom

7. Copy NGROK url when running the last code in colab. For example: "https://e93c-34-82-254-178.ngrok-free.app"
   
8. Replace the following variables NGROK URL in your local flask app's main.py: <br>
 COLAB_URL = "YOUR_NGROK_URL/process" <br>
9. Lastly, run the following command to start your local flask app

```bash
python main.py
```
<h1>Contributors</h1>
<table>
  <tr>
    <!-- Row for images -->
    <td align="center">
      <img src="https://media.licdn.com/dms/image/v2/C4D03AQFxkjoL41Vq-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653217262059?e=1741824000&v=beta&t=TvWk4l4zIGtdzMbUJtk6-2V6hf2PcJ5lR5XgBSeuuGM" width="100px;" alt="Kevan Soon"/>
    </td>
    <td align="center">
      <img src="https://media.licdn.com/dms/image/v2/C5603AQFidBM2K2d3kA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1636695735903?e=1741824000&v=beta&t=B7t6_dv033Av4Zxrdg0nCCo2PpVNrdoeerP575slQTw" width="100px;" alt="Zulfaqar Hafez"/>
    </td>
    <td align="center">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQEyiGzENyH1bg/profile-displayphoto-shrink_400_400/B56ZRUuMB.G8Ag-/0/1736588182873?e=1741824000&v=beta&t=ngroT--AxMlb7qWdIaZIj5AKxP0xaJe0ygQdcF_EvFU" width="100px;" alt="Amir Ashraf"/>
    </td>
  </tr>
  <tr>
    <!-- Row for names with links -->
    <td align="center">
      <a href="https://www.linkedin.com/in/kevansoon/" target="_blank"><strong>Kevan Soon</strong></a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/zulfaqarhafez/" target="_blank"><strong>Zulfaqar Hafez</strong></a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/amir-ashraf-45464119b/" target="_blank"><strong>Amir Ashraf</strong></a>
    </td>
  </tr>
</table>
