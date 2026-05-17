import requests
import os
from datetime import datetime

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "llama3-70b-8192",
    "messages": [
        {
            "role": "user",
            "content": "Give one short EEG ML improvement suggestion."
        }
    ]
}

response = requests.post(url, headers=headers, json=data)

response_json = response.json()

suggestion = response_json["choices"][0]["message"]["content"]

with open("README.md", "a", encoding="utf-8") as f:
    f.write(f"\n\n## Daily AI Update {datetime.now()}\n")
    f.write(f"- {suggestion}\n")

print("README updated successfully")