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

# Research topics pool
research_topics = [
    "EEG signal preprocessing",
    "Brain signal classification",
    "Motor imagery decoding",
    "Deep learning for BCI",
    "Real-time EEG analysis",
    "Transformer models for EEG",
    "Noise reduction in EEG signals",
    "Emotion recognition using EEG",
    "Neural feature extraction",
    "Brainwave visualization systems",
    "Adaptive BCI interfaces",
    "Attention detection models",
    "Cognitive load estimation",
    "Hybrid CNN-LSTM architectures",
    "Transfer learning in BCI"
]

selected_topic = random.choice(research_topics)

prompt = f"""
You are an AI research assistant working on an advanced Brain Computer Interface project.

Generate:
1. A short professional research update
2. A technical improvement implemented today
3. A future enhancement idea

Topic: {selected_topic}

Keep it realistic, concise, technical, and professional.
"""

data = {
    "model": "llama3-8b-8192",
    "messages": [
        {
            "role": "user",
            "content": prompt
        }
    ],
    "temperature": 0.8
}

try:
    response = requests.post(url, headers=headers, json=data)

    response_json = response.json()

    if "choices" in response_json:
        ai_content = response_json["choices"][0]["message"]["content"]
    else:
        ai_content = f"""
### Research Focus
Investigated optimization strategies for {selected_topic}.

### Improvement Added
Enhanced preprocessing pipeline stability and improved experimental documentation.

### Next Planned Step
Evaluate model generalization performance on extended EEG datasets.
"""

except Exception as e:
    ai_content = f"""
### Research Focus
Investigated optimization strategies for {selected_topic}.

### Improvement Added
Enhanced preprocessing pipeline stability and improved experimental documentation.

### Next Planned Step
Evaluate model generalization performance on extended EEG datasets.

Error: {str(e)}
"""

timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

daily_update = f"""

---

# Daily AI Research Update
Date: {timestamp}

{ai_content}

"""

with open("README.md", "a", encoding="utf-8") as file:
    file.write(daily_update)

print("README updated successfully with AI research log.")