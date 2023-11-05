
from flask import Flask, request, jsonify
import os
import openai
import dotenv

dotenv.load_dotenv()
openai.api_key = os.getenv("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")

def get_response(prompt, system_behaviour):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_behaviour},
            {"role": "user", "content": prompt}
        ]
    )
    return response["choices"][0]["message"]["content"]

app = Flask(__name__)

@app.route('/api/get_response', methods=['POST'])
def get_chatgpt_response():
    data = request.get_json()
    prompt = data['prompt']
    system_behaviour = data['systemBehaviour']
    
    response = get_response(prompt, system_behaviour)
    