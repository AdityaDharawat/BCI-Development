import requests
from datetime import datetime

GROQ_API_KEY = "${GROQ_API_KEY}"

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}

prompt = """
Give one short technical improvement suggestion
for an EEG/BCI machine learning project.
Keep it under 30 words.
"""

data = {
    "model": "llama3-70b-8192",
    "messages": [
        {
            "role": "user",
            "content": prompt
        }
    ]
}

response = requests.post(url, headers=headers, json=data)

suggestion = response.json()["choices"][0]["message"]["content"]

with open("README.md", "a", encoding="utf-8") as f:
    f.write(f"\n\n## Daily AI Update ({datetime.now()})\n")
    f.write(f"- {suggestion}\n")

print("README updated successfully")