import os
import openai
import dotenv
dotenv.load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")
def get_response(prompt, system_behaviour):
    response = openai.ChatCompletion.create(model="gpt-4",
                                messages=[{"role": "system", "content": system_behaviour},
                                        {"role": "user", "content": prompt}])
    return response["choices"][0]["message"]["content"]