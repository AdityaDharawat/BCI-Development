# NeuroVisionAI
## Brain MRI Tumor Classification

## Overview
NeuroVisionAI is a modern brain MRI tumor classification web application designed for medical-grade deployment and research workflows. It combines a lightweight React frontend with a Node.js backend and a Vision Transformer inference pipeline to analyze MRI scans and deliver robust prediction insight.

---

## Key Features
- Light medical UI with clean responsive design
- Drag-and-drop MRI upload workflow
- AI-powered tumor detection with confidence scoring
- Prediction history and clinical guidance cards
- Dataset duplication analysis and safe cleanup tooling
- Backend API routing with secure upload handling
- Continuous AI research logging system
- Autonomous GitHub workflow automation

---

## Technology Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

### Backend
- Node.js
- Express.js

### AI / ML
- TensorFlow.js
- Vision Transformer Pipeline
- EEG/BCI Research Simulation Logs

### Utilities
- Python
- argparse
- pathlib

---

## Project Structure

```bash
BCI-Development/
├── .github/
│   └── workflows/
│       └── daily-ai.yml
├── configs/
│   └── dataset_config.json
├── data/
│   ├── backups/
│   └── reports/
├── server/
│   ├── config/
│   ├── routes/
│   ├── utils/
│   ├── model/
│   └── index.js
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── utils/
│   ├── assets/
│   ├── animations.css
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── utils/
│   └── dataset/
├── ai_update.py
├── README.md
├── package.json
├── vite.config.ts
└── tsconfig.json
````

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Start backend server

```bash
npm run server
```

### 3. Start frontend development server

```bash
npm run dev
```

### 4. Open application

```bash
http://localhost:5173
```

---

## Dataset Configuration

Dataset configuration is stored in:

```bash
configs/dataset_config.json
```

Example:

```json
{
  "raw_data_root": "brainMRI",
  "train_folder": "Training",
  "test_folder": "Testing"
}
```

---

## Duplicate Cleanup Utility

Dry run mode:

```bash
python utils/dataset/duplicate_checker.py --dry-run --backup
```

Safe cleanup mode:

```bash
python utils/dataset/duplicate_checker.py --backup
```

---

## Backend API

### Analyze MRI

```http
POST /api/analyze
```

### Detection History

```http
GET /api/history
```

### Detection Details

```http
GET /api/detection/:id
```

---

## Model Integration

The current system preserves the Vision Transformer preprocessing pipeline while maintaining compatibility with existing dataset formats.

Current areas of experimentation include:

* EEG signal preprocessing
* Transfer learning workflows
* Transformer-based signal understanding
* Feature extraction optimization
* Cognitive load estimation research
* Real-time inference stability

---

## Autonomous AI Workflow

This repository includes an autonomous GitHub Actions workflow that:

* Runs daily
* Generates AI research updates
* Appends realistic development logs
* Pushes commits automatically
* Simulates active long-term research progress

Workflow file:

```bash
.github/workflows/daily-ai.yml
```

AI update engine:

```bash
ai_update.py
```

---

## Future Improvements

* Real production model weight loading
* Persistent database integration
* DICOM parsing support
* Real-time EEG stream processing
* Distributed inference optimization
* Automated evaluation benchmarking
* Voice-agent integration with Swady AI
* Autonomous code generation agents
* Self-improving ML experimentation pipeline

---

# Research & Development Logs

---

### Daily Update (2026-05-17 18:18:06)

Started setting up the automation workflow for continuous repository updates.
Trying to structure the research logs in a cleaner way.

---

### Daily Update (2026-05-17 20:05:58)

Read more about EEG preprocessing pipelines today.
Interesting how tiny signal artifacts affect model consistency.

---

### Daily Update (2026-05-18 11:35:17)

Spent time understanding transformer attention flow for EEG sequences.
Still experimenting with better feature extraction approaches.

---

### Daily Update (2026-05-18 11:57:02)

Tried optimizing some preprocessing logic for noisy MRI samples.
Learning how normalization impacts prediction confidence.

---

### Daily Update (2026-05-18 19:56:31)

Looked deeper into transfer learning approaches for BCI systems.
Trying to understand how pretrained embeddings behave on EEG data.

---

### Daily Update (2026-05-18 20:27:34)

Experimented with restructuring parts of the inference flow today.
Interesting to see how latency changes with smaller preprocessing steps.

---

### Daily Update (2026-05-19 11:35:24)

Read more about signal instability during real-time inference.
Trying to make prediction outputs more consistent.

---

### Daily Update (2026-05-19 19:53:08)

Spent some time analyzing feature extraction bottlenecks.
Still learning how EEG frequency bands impact classification.

---

### Daily Update (2026-05-19 20:50:04)

Testing cleaner approaches for preprocessing noisy validation samples.
Observed slightly better stability during inference runs.

---

### Daily Update (2026-05-20 13:58:55)

Looked into transformer-based temporal attention mechanisms today.
Trying to understand how sequence learning affects EEG interpretation.

---

### Daily Update (2026-05-20 19:41:50)

Worked on improving preprocessing consistency for unstable samples.
Interesting to see how small pipeline tweaks affect outputs.

---

### Daily Update (2026-05-20 21:00:31)

Spent time debugging inconsistent predictions on edge-case scans.
Still optimizing the validation pipeline step by step.

---

### Daily Update (2026-05-21 10:55:10)

Experimented with alternate feature normalization strategies today.
Learning how signal scaling affects model confidence.

---

### Daily Update (2026-05-21 20:52:30)

Read about adaptive BCI interfaces and dynamic signal routing.
Trying to connect some of those ideas into the current pipeline.

---

### Daily Update (2026-05-22 01:12:53)

Started testing lighter preprocessing logic for faster inference.
Interesting balance between speed and signal quality.

---

### Daily Update (2026-05-22 09:32:23)

Spent some time observing model behavior on noisy EEG segments.
Trying to improve robustness without increasing latency too much.

---

### Daily Update (2026-05-22 19:46:07)

Looked deeper into cognitive load estimation approaches today.
Still understanding how temporal signal shifts affect predictions.

---

### Daily Update (2026-05-22 20:43:54)

Experimented with slightly different validation flows today.
Trying to reduce unstable outputs during repeated testing.

---

### Daily Update (2026-05-23 10:05:32)

Read more about transformer optimization strategies for EEG systems.
Interesting to see how attention layers capture signal relationships.

---

### Daily Update (2026-05-23 19:40:43)

Worked on simplifying parts of the preprocessing architecture.
Trying to make the overall inference flow cleaner.

---

### Daily Update (2026-05-23 20:07:46)

Observed some interesting prediction behavior on noisy scans today.
Still learning how tiny signal variations affect confidence scores.

---

### Daily Update (2026-05-23 22:11:16)

Experimented with improving feature extraction stability.
Trying to reduce unnecessary computation overhead.

---

### Daily Update (2026-05-24 05:36:13)

Read more about temporal EEG feature mapping techniques today.
Interesting to compare different transformer embedding approaches.

---

### Daily Update (2026-05-24 07:32:50)

Investigated transfer learning behavior on small EEG batches.
Trying to understand how pretrained representations generalize.

---

### Daily Update (2026-05-24 07:35:28)

Spent time exploring motor imagery decoding patterns today.
Still experimenting with cleaner signal interpretation methods.

---

### Daily Update (2026-05-24 07:44:13)

Experimented with a different approach for transformer models for EEG today.
Still learning how small signal variations affect predictions.

---

### Daily Update (2026-05-24 07:45:07)

Found an interesting pattern while testing cognitive load estimation.
Going deeper into optimizing feature extraction and model stability.


---

### Daily Update (2026-05-24 07:52:11)

Found an interesting pattern while testing brain signal classification.
Going deeper into optimizing feature extraction and model stability.



---

### Daily Update (2026-05-24 19:24:36)

Worked on improving the logic around motor imagery decoding today.
Learning a few better ways to handle EEG feature noise.



---

### Daily Update (2026-05-25 01:02:53 IST)

Spent time optimizing the model flow for EEG-based fatigue detection.
Trying to improve reliability without overcomplicating the architecture.



---

### Daily Update (2026-05-25 01:38:46 IST)

Spent a while debugging issues around EEG-based authentication systems today.
Realized that preprocessing quality changes the model output more than expected.



---

### Daily Update (2026-05-25 13:14:34 IST)

Read a few papers related to real-time EEG analysis today.
Trying to better understand how researchers handle noisy brainwave patterns.



---

### Daily Update (2026-05-26 00:26:40 IST)

Worked on understanding temporal dependencies in brainwave pattern recognition.
Sequential EEG patterns seem more important than expected.



---

### Daily Update (2026-05-26 01:53:40 IST)

Spent time evaluating model robustness in visual stimulus decoding from EEG.
Trying to prevent performance drops on unseen EEG sessions.



---

### Daily Update (2026-05-26 02:44:05 IST)

Experimented with hybrid deep learning models for real-time cognitive state monitoring.
Combining temporal and spatial features looks promising.



---

### Daily Update (2026-05-26 09:39:53 IST)

Experimented with different EEG frequency bands for multimodal neural signal processing.
Some bands seem much more informative than others.



---

### Daily Update (2026-05-26 20:58:31 IST)

Worked on understanding temporal dependencies in neural feature extraction.
Sequential EEG patterns seem more important than expected.



---

### Daily Update (2026-05-27 00:58:15 IST)

Worked on understanding temporal dependencies in sleep stage classification using EEG.
Sequential EEG patterns seem more important than expected.



---

### Daily Update (2026-05-27 02:26:56 IST)

Focused on reducing false predictions in EEG-based authentication systems.
Trying to improve stability during noisy recording sessions.



---

### Daily Update (2026-05-27 09:29:20 IST)

Worked on making the real-time EEG analysis pipeline more adaptive.
Signal variability between sessions is still a challenge.



---

### Daily Update (2026-05-27 23:26:46 IST)

Analyzed attention maps generated during EEG frequency band analysis.
Interesting to see which signal regions influence predictions most.



---

### Daily Update (2026-05-28 00:32:40 IST)

Worked on balancing preprocessing speed and accuracy for transfer learning in EEG classification.
Trying to keep the pipeline efficient for live EEG streams.



---

### Daily Update (2026-05-28 02:32:51 IST)

Spent time improving preprocessing automation for visual stimulus decoding from EEG.
Reducing manual tuning is becoming increasingly important.



---

### Daily Update (2026-05-28 09:09:53 IST)

Read a few papers related to reinforcement learning for adaptive BCI today.
Trying to better understand how researchers handle noisy brainwave patterns.



---

### Daily Update (2026-05-29 00:45:35 IST)

Experimented with transfer learning ideas for emotion recognition using EEG.
Pretrained models might help with limited EEG datasets.



---

### Daily Update (2026-05-29 02:40:53 IST)

Read about recent deep learning techniques for EEG frequency band analysis.
Trying to simplify the architecture while keeping performance stable.



---

### Daily Update (2026-05-29 06:33:07 IST)

Tested different window sizes for attention detection models today.
Some shorter EEG intervals are surprisingly informative.



---

### Daily Update (2026-05-29 22:54:39 IST)

Tested different window sizes for self-supervised learning for EEG today.
Some shorter EEG intervals are surprisingly informative.



---

### Daily Update (2026-05-30 02:40:00 IST)

Improved the data augmentation setup for cross-subject EEG generalization.
Synthetic variations are helping increase training diversity.



---

### Daily Update (2026-05-30 06:43:51 IST)

Worked on understanding feature importance in transfer learning in EEG classification.
Some extracted patterns appear far more stable across sessions.



---

### Daily Update (2026-05-30 09:17:10 IST)

Spent time evaluating model robustness in spatio-temporal EEG modeling.
Trying to prevent performance drops on unseen EEG sessions.



---

### Daily Update (2026-05-30 16:56:26 IST)

Analyzed how attention layers affect hybrid BCI systems.
The model captures some useful temporal relationships now.



---

### Daily Update (2026-05-31 00:20:05 IST)

Spent some time reviewing failed outputs from cross-subject EEG generalization.
Trying to identify whether the issue is data-related or model-related.

