import os
import requests
import random
from datetime import datetime
from zoneinfo import ZoneInfo

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
    "cognitive load estimation",
    "EEG artifact removal",
    "brain-computer interface optimization",
    "multimodal neural signal processing",
    "EEG-based authentication systems",
    "sleep stage classification using EEG",
    "epileptic seizure detection",
    "EEG signal augmentation techniques",
    "self-supervised learning for EEG",
    "graph neural networks for EEG",
    "EEG channel selection methods",
    "cross-subject EEG generalization",
    "few-shot learning for brain signals",
    "EEG emotion dataset analysis",
    "brain connectivity analysis",
    "neurofeedback systems",
    "spatio-temporal EEG modeling",
    "EEG frequency band analysis",
    "hybrid BCI systems",
    "EEG signal denoising using autoencoders",
    "federated learning for EEG data",
    "real-time cognitive state monitoring",
    "transfer learning in EEG classification",
    "EEG-based fatigue detection",
    "reinforcement learning for adaptive BCI",
    "visual stimulus decoding from EEG",
    "speech recognition using brain signals",
    "EEG-driven robotic control",
    "mental workload prediction",
    "AI-assisted neurological disorder diagnosis",
    "brainwave pattern recognition"
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
    f"Spent a while debugging issues around {selected_topic} today.\nRealized that preprocessing quality changes the model output more than expected.",

    f"Tried refining the workflow for {selected_topic}.\nStill experimenting with ways to reduce unstable EEG predictions.",

    f"Worked on improving consistency in {selected_topic}.\nSmall noise spikes are still affecting the final classification accuracy.",

    f"Read a few papers related to {selected_topic} today.\nTrying to better understand how researchers handle noisy brainwave patterns.",

    f"Experimented with feature extraction methods for {selected_topic}.\nSome combinations seem promising for improving signal clarity.",

    f"Focused on cleaning EEG samples before running {selected_topic}.\nThe output looks slightly more stable after filtering unwanted artifacts.",

    f"Tested multiple preprocessing strategies for {selected_topic}.\nLearning how sensitive EEG pipelines are to signal quality.",

    f"Spent time optimizing the model flow for {selected_topic}.\nTrying to improve reliability without overcomplicating the architecture.",

    f"Compared different neural network approaches for {selected_topic}.\nInteresting to see how each model reacts to subtle EEG variations.",

    f"Worked on reducing signal distortion during {selected_topic} analysis.\nStill tuning the balance between smoothing and preserving useful information.",

    f"Looked deeper into feature stability for {selected_topic} today.\nEven small preprocessing tweaks create noticeable prediction differences.",

    f"Explored some transformer-based ideas for {selected_topic}.\nTrying to see whether temporal attention improves EEG understanding.",

    f"Improved part of the preprocessing pipeline for {selected_topic}.\nThe cleaner inputs are giving slightly more consistent outputs now.",

    f"Spent time analyzing edge cases in {selected_topic}.\nCertain EEG segments behave unpredictably and need better handling.",

    f"Experimented with different EEG frequency bands for {selected_topic}.\nSome bands seem much more informative than others.",

    f"Focused on model generalization for {selected_topic} today.\nTrying to avoid overfitting on limited EEG samples.",

    f"Worked on making the {selected_topic} pipeline more adaptive.\nSignal variability between sessions is still a challenge.",

    f"Read about recent deep learning techniques for {selected_topic}.\nTrying to simplify the architecture while keeping performance stable.",

    f"Investigated why some predictions fail during {selected_topic} testing.\nMost issues seem connected to inconsistent preprocessing steps.",

    f"Spent time tuning hyperparameters for {selected_topic}.\nMinor adjustments are surprisingly affecting EEG classification confidence.",

    f"Experimented with temporal signal segmentation for {selected_topic}.\nTrying to capture cleaner patterns from shorter EEG windows.",

    f"Improved artifact filtering logic around {selected_topic}.\nEye blink and muscle noise removal is helping slightly.",

    f"Worked on understanding feature importance in {selected_topic}.\nSome extracted patterns appear far more stable across sessions.",

    f"Compared CNN and transformer performance for {selected_topic}.\nStill evaluating which architecture handles EEG sequences better.",

    f"Focused on reducing training instability for {selected_topic}.\nTrying to make convergence smoother with noisy EEG inputs.",

    f"Explored adaptive normalization techniques for {selected_topic}.\nInteresting results so far with dynamic signal scaling.",

    f"Spent some time reviewing failed outputs from {selected_topic}.\nTrying to identify whether the issue is data-related or model-related.",

    f"Worked on refining EEG feature selection for {selected_topic}.\nRemoving redundant channels seems to improve consistency a bit.",

    f"Experimented with lightweight architectures for {selected_topic}.\nTrying to make the pipeline more efficient for real-time use.",

    f"Read more about cross-subject variability in {selected_topic}.\nGeneralizing across different EEG recordings is still difficult.",

    f"Focused on improving prediction confidence for {selected_topic}.\nTrying to reduce uncertain outputs caused by noisy signals.",

    f"Tested different filtering frequencies for {selected_topic}.\nInteresting how small frequency shifts impact model behavior.",

    f"Worked on understanding temporal dependencies in {selected_topic}.\nSequential EEG patterns seem more important than expected.",

    f"Improved the data augmentation setup for {selected_topic}.\nSynthetic variations are helping increase training diversity.",

    f"Spent time evaluating model robustness in {selected_topic}.\nTrying to prevent performance drops on unseen EEG sessions.",

    f"Analyzed how attention layers affect {selected_topic}.\nThe model captures some useful temporal relationships now.",

    f"Experimented with noise suppression techniques for {selected_topic}.\nCleaner inputs are slowly improving classification reliability.",

    f"Worked on balancing preprocessing speed and accuracy for {selected_topic}.\nTrying to keep the pipeline efficient for live EEG streams.",

    f"Looked into feature drift issues during {selected_topic} testing.\nSignal distributions change more often than expected.",

    f"Improved the training dataset organization for {selected_topic}.\nCleaner labeling is making debugging much easier.",

    f"Tested different window sizes for {selected_topic} today.\nSome shorter EEG intervals are surprisingly informative.",

    f"Focused on reducing false predictions in {selected_topic}.\nTrying to improve stability during noisy recording sessions.",

    f"Experimented with hybrid deep learning models for {selected_topic}.\nCombining temporal and spatial features looks promising.",

    f"Worked on simplifying the feature extraction process for {selected_topic}.\nTrying to keep only the most meaningful EEG patterns.",

    f"Analyzed attention maps generated during {selected_topic}.\nInteresting to see which signal regions influence predictions most.",

    f"Read more about adaptive EEG pipelines for {selected_topic}.\nTrying to make the system handle changing signal conditions better.",

    f"Spent time improving preprocessing automation for {selected_topic}.\nReducing manual tuning is becoming increasingly important.",

    f"Experimented with transfer learning ideas for {selected_topic}.\nPretrained models might help with limited EEG datasets.",

    f"Worked on improving feature consistency across sessions for {selected_topic}.\nSignal shifts between recordings remain challenging.",

    f"Focused on building a more stable training loop for {selected_topic}.\nTrying to avoid sudden performance fluctuations during optimization."
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

timestamp = datetime.now(
    ZoneInfo("Asia/Kolkata")
).strftime("%Y-%m-%d %H:%M:%S IST")

daily_update = f"""

---

### Daily Update ({timestamp})

{ai_content}

"""

with open("README.md", "a", encoding="utf-8") as file:
    file.write(daily_update)

print("README updated successfully.")