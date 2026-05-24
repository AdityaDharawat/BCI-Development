import os
import requests
import random
from datetime import datetime

API_KEY = os.getenv("GROQ_API_KEY")

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

research_topics = [
    "EEG signal preprocessing",
    "brain signal classification",
    "motor imagery decoding",
    "deep learning for BCI",
    "real-time EEG analysis",
    "transformer models for EEG",
    "noise reduction in EEG signals",
    "emotion recognition using EEG",
    "neural feature extraction",
    "adaptive BCI interfaces",
    "attention detection models",
    "cognitive load estimation"
]

selected_topic = random.choice(research_topics)

prompt = f"""
You are a developer casually working on a Brain Computer Interface project.

Write ONLY 2 short human-like lines for a README daily update.

Topic: {selected_topic}

Requirements:
- sound natural
- sound like a real developer
- avoid corporate language
- avoid sounding like AI
- mention learning, experimenting, debugging, optimizing, discovering, or understanding something
- keep it short
- no markdown headings
- no bullet points
- no emojis
"""

data = {
    "model": "llama3-8b-8192",
    "messages": [
        {
            "role": "user",
            "content": prompt
        }
    ],
    "temperature": 1.1,
    "max_tokens": 120
}

fallback_updates = [
    f"Spent some time understanding how {selected_topic} behaves with noisy EEG data.\nTrying a cleaner preprocessing flow to improve consistency.",

    f"Experimented with a different approach for {selected_topic} today.\nStill learning how small signal variations affect predictions.",

    f"Found an interesting pattern while testing {selected_topic}.\nGoing deeper into optimizing feature extraction and model stability.",

    f"Read more about recent techniques related to {selected_topic}.\nTrying to understand how to make the pipeline more reliable.",

    f"Worked on improving the logic around {selected_topic} today.\nLearning a few better ways to handle EEG feature noise."
]

try:
    response = requests.post(url, headers=headers, json=data)

    response_json = response.json()

    if "choices" in response_json:
        ai_content = response_json["choices"][0]["message"]["content"].strip()
    else:
        ai_content = random.choice(fallback_updates)

except Exception:
    ai_content = random.choice(fallback_updates)

timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

daily_update = f"""

---

### Daily Update ({timestamp})

{ai_content}

"""

with open("README.md", "a", encoding="utf-8") as file:
    file.write(daily_update)

print("README updated successfully.")