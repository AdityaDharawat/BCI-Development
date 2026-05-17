import os
import requests
from datetime import datetime

API_KEY = os.getenv("GROQ_API_KEY")

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "llama3-8b-8192",
    "messages": [
        {
            "role": "user",
            "content": "Give one short improvement suggestion for a Brain Computer Interface ML project."
        }
    ]
}

response = requests.post(url, headers=headers, json=data)

response_json = response.json()

print("FULL API RESPONSE:")
print(response_json)

# Safe extraction
if "choices" in response_json:
    suggestion = response_json["choices"][0]["message"]["content"]
else:
    suggestion = "Automated repository maintenance update."

timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

update_text = f"""

## Daily AI Update - {timestamp}

{suggestion}

"""

with open("README.md", "a", encoding="utf-8") as file:
    file.write(update_text)

print("README updated successfully.")