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
- MRI/BCI Research Simulation Logs

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

* MRI signal preprocessing
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
* Real-time MRI stream processing
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

Read more about MRI preprocessing pipelines today.
Interesting how tiny signal artifacts affect model consistency.

---

### Daily Update (2026-05-18 11:35:17)

Spent time understanding transformer attention flow for MRI sequences.
Still experimenting with better feature extraction approaches.

---

### Daily Update (2026-05-18 11:57:02)

Tried optimizing some preprocessing logic for noisy MRI samples.
Learning how normalization impacts prediction confidence.

---

### Daily Update (2026-05-18 19:56:31)

Looked deeper into transfer learning approaches for BCI systems.
Trying to understand how pretrained embeddings behave on MRI data.

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
Still learning how MRI frequency bands impact classification.

---

### Daily Update (2026-05-19 20:50:04)

Testing cleaner approaches for preprocessing noisy validation samples.
Observed slightly better stability during inference runs.

---

### Daily Update (2026-05-20 13:58:55)

Looked into transformer-based temporal attention mechanisms today.
Trying to understand how sequence learning affects MRI interpretation.

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

Spent some time observing model behavior on noisy MRI segments.
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

Read more about transformer optimization strategies for MRI systems.
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

Read more about temporal MRI feature mapping techniques today.
Interesting to compare different transformer embedding approaches.

---

### Daily Update (2026-05-24 07:32:50)

Investigated transfer learning behavior on small MRI batches.
Trying to understand how pretrained representations generalize.

---

### Daily Update (2026-05-24 07:35:28)

Spent time exploring motor imagery decoding patterns today.
Still experimenting with cleaner signal interpretation methods.

---

### Daily Update (2026-05-24 07:44:13)

Experimented with a different approach for transformer models for MRI today.
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
Learning a few better ways to handle MRI feature noise.



---

### Daily Update (2026-05-25 01:02:53 IST)

Spent time optimizing the model flow for MRI-based fatigue detection.
Trying to improve reliability without overcomplicating the architecture.



---

### Daily Update (2026-05-25 01:38:46 IST)

Spent a while debugging issues around MRI-based authentication systems today.
Realized that preprocessing quality changes the model output more than expected.



---

### Daily Update (2026-05-25 13:14:34 IST)

Read a few papers related to real-time MRI analysis today.
Trying to better understand how researchers handle noisy brainwave patterns.



---

### Daily Update (2026-05-26 00:26:40 IST)

Worked on understanding temporal dependencies in brainwave pattern recognition.
Sequential MRI patterns seem more important than expected.



---

### Daily Update (2026-05-26 01:53:40 IST)

Spent time evaluating model robustness in visual stimulus decoding from MRI.
Trying to prevent performance drops on unseen MRI sessions.



---

### Daily Update (2026-05-26 02:44:05 IST)

Experimented with hybrid deep learning models for real-time cognitive state monitoring.
Combining temporal and spatial features looks promising.



---

### Daily Update (2026-05-26 09:39:53 IST)

Experimented with different MRI frequency bands for multimodal neural signal processing.
Some bands seem much more informative than others.



---

### Daily Update (2026-05-26 20:58:31 IST)

Worked on understanding temporal dependencies in neural feature extraction.
Sequential MRI patterns seem more important than expected.



---

### Daily Update (2026-05-27 00:58:15 IST)

Worked on understanding temporal dependencies in sleep stage classification using MRI.
Sequential MRI patterns seem more important than expected.



---

### Daily Update (2026-05-27 02:26:56 IST)

Focused on reducing false predictions in MRI-based authentication systems.
Trying to improve stability during noisy recording sessions.



---

### Daily Update (2026-05-27 09:29:20 IST)

Worked on making the real-time MRI analysis pipeline more adaptive.
Signal variability between sessions is still a challenge.



---

### Daily Update (2026-05-27 23:26:46 IST)

Analyzed attention maps generated during MRI frequency band analysis.
Interesting to see which signal regions influence predictions most.



---

### Daily Update (2026-05-28 00:32:40 IST)

Worked on balancing preprocessing speed and accuracy for transfer learning in MRI classification.
Trying to keep the pipeline efficient for live MRI streams.



---

### Daily Update (2026-05-28 02:32:51 IST)

Spent time improving preprocessing automation for visual stimulus decoding from MRI.
Reducing manual tuning is becoming increasingly important.



---

### Daily Update (2026-05-28 09:09:53 IST)

Read a few papers related to reinforcement learning for adaptive BCI today.
Trying to better understand how researchers handle noisy brainwave patterns.



---

### Daily Update (2026-05-29 00:45:35 IST)

Experimented with transfer learning ideas for emotion recognition using MRI.
Pretrained models might help with limited MRI datasets.



---

### Daily Update (2026-05-29 02:40:53 IST)

Read about recent deep learning techniques for MRI frequency band analysis.
Trying to simplify the architecture while keeping performance stable.



---

### Daily Update (2026-05-29 06:33:07 IST)

Tested different window sizes for attention detection models today.
Some shorter MRI intervals are surprisingly informative.



---

### Daily Update (2026-05-29 22:54:39 IST)

Tested different window sizes for self-supervised learning for MRI today.
Some shorter MRI intervals are surprisingly informative.



---

### Daily Update (2026-05-30 02:40:00 IST)

Improved the data augmentation setup for cross-subject MRI generalization.
Synthetic variations are helping increase training diversity.



---

### Daily Update (2026-05-30 06:43:51 IST)

Worked on understanding feature importance in transfer learning in MRI classification.
Some extracted patterns appear far more stable across sessions.



---

### Daily Update (2026-05-30 09:17:10 IST)

Spent time evaluating model robustness in spatio-temporal MRI modeling.
Trying to prevent performance drops on unseen MRI sessions.



---

### Daily Update (2026-05-30 16:56:26 IST)

Analyzed how attention layers affect hybrid BCI systems.
The model captures some useful temporal relationships now.



---

### Daily Update (2026-05-31 00:20:05 IST)

Spent some time reviewing failed outputs from cross-subject MRI generalization.
Trying to identify whether the issue is data-related or model-related.



---

### Daily Update (2026-05-31 01:41:19 IST)

Focused on building a more stable training loop for visual stimulus decoding from MRI.
Trying to avoid sudden performance fluctuations during optimization.



---

### Daily Update (2026-05-31 11:23:46 IST)

Improved artifact filtering logic around mental workload prediction.
Eye blink and muscle noise removal is helping slightly.



---

### Daily Update (2026-06-01 00:52:30 IST)

Compared CNN and transformer performance for AI-assisted neurological disorder diagnosis.
Still evaluating which architecture handles MRI sequences better.



---

### Daily Update (2026-06-01 01:44:26 IST)

Improved artifact filtering logic around cross-subject MRI generalization.
Eye blink and muscle noise removal is helping slightly.



---

### Daily Update (2026-06-01 09:29:08 IST)

Focused on cleaning MRI samples before running transformer models for MRI.
The output looks slightly more stable after filtering unwanted artifacts.



---

### Daily Update (2026-06-02 00:42:14 IST)

Experimented with transfer learning ideas for reinforcement learning for adaptive BCI.
Pretrained models might help with limited MRI datasets.



---

### Daily Update (2026-06-02 03:42:57 IST)

Analyzed how attention layers affect cross-subject MRI generalization.
The model captures some useful temporal relationships now.



---

### Daily Update (2026-06-02 08:48:02 IST)

Tested different window sizes for MRI signal denoising using autoencoders today.
Some shorter MRI intervals are surprisingly informative.



---

### Daily Update (2026-06-03 00:02:11 IST)

Reviewed research focused on clinical translation of 3D MRI image analysis.
Interpretability and reliability remain major considerations.



---

### Daily Update (2026-06-03 03:21:30 IST)

Investigated multimodal approaches linked to explainable AI for brain tumor diagnosis.
Combining complementary MRI sequences may enhance performance.



---

### Daily Update (2026-06-03 09:16:27 IST)

Investigated recent developments related to self-supervised learning on MRI scans.
Transformer-based approaches are becoming more common in medical imaging research.



---

### Daily Update (2026-06-03 15:31:09 IST)

Focused on understanding the workflow behind brain tumor segmentation methods.
Data preparation remains a critical step before model development.



---

### Daily Update (2026-06-04 01:23:35 IST)

Reviewed examples of clinical applications involving 3D U-Net for brain tumor segmentation.
Practical deployment often requires extensive validation across cohorts.



---

### Daily Update (2026-06-04 03:22:53 IST)

Compared several techniques used in brain MRI preprocessing techniques.
Each method presents trade-offs between accuracy, complexity, and interpretability.



---

### Daily Update (2026-06-04 06:43:06 IST)

Focused on reproducibility concerns surrounding MRI feature engineering for tumor detection.
Consistent preprocessing protocols appear essential for reliable results.



---

### Daily Update (2026-06-05 00:47:47 IST)

Reviewed open-source implementations related to bias field correction in MRI scans.
Interesting differences exist between academic and production pipelines.



---

### Daily Update (2026-06-05 02:29:10 IST)

Reviewed the overall research landscape around medical image segmentation with U-Net.
The field continues to move toward more robust and clinically applicable solutions.



---

### Daily Update (2026-06-05 06:44:13 IST)

Investigated data augmentation practices used in cross-cohort MRI classification.
Several studies report improvements when training diversity is increased.



---

### Daily Update (2026-06-05 22:14:19 IST)

Explored volumetric analysis methods associated with MRI cohort-based tumor studies.
Three-dimensional information provides additional clinical context.



---

### Daily Update (2026-06-06 00:17:49 IST)

Compared traditional machine learning and deep learning methods for clinical MRI dataset analysis.
Performance differences often depend on dataset size and quality.



---

### Daily Update (2026-06-06 02:19:03 IST)

Focused on understanding the workflow behind multi-center MRI dataset harmonization.
Data preparation remains a critical step before model development.



---

### Daily Update (2026-06-06 08:38:54 IST)

Studied evaluation protocols commonly applied to class imbalance handling in MRI datasets.
Cross-validation strategies vary substantially between studies.



---

### Daily Update (2026-06-06 22:56:22 IST)

Examined approaches for handling class imbalance in MRI cohort-based tumor studies.
Sampling strategies continue to be widely adopted.



---

### Daily Update (2026-06-07 00:38:45 IST)

Compared different MRI preprocessing pipelines related to brain lesion detection and classification.
Standardization remains a key theme across studies.



---

### Daily Update (2026-06-07 01:42:18 IST)

Reviewed the overall research landscape around glioma detection from MRI scans.
The field continues to move toward more robust and clinically applicable solutions.



---

### Daily Update (2026-06-07 10:21:46 IST)

Explored methods for reducing preprocessing variability in transformer models for brain MRI analysis.
Standard workflows may improve reproducibility.



---

### Daily Update (2026-06-08 01:45:20 IST)

Reviewed literature discussing dataset harmonization for brain tumor segmentation methods.
Reducing scanner-specific variation could improve generalization.



---

### Daily Update (2026-06-08 06:45:14 IST)

Reviewed examples of clinical applications involving MRI image registration techniques.
Practical deployment often requires extensive validation across cohorts.



---

### Daily Update (2026-06-09 00:53:21 IST)

Read about explainability techniques associated with intensity standardization in MRI.
Understanding model decisions remains important for medical applications.



---

### Daily Update (2026-06-09 02:42:06 IST)

Reviewed open-source implementations related to tumor grading using MRI scans.
Interesting differences exist between academic and production pipelines.



---

### Daily Update (2026-06-09 06:46:19 IST)

Looked into common challenges encountered during healthy vs tumor MRI classification.
Data heterogeneity remains a recurring issue in published studies.



---

### Daily Update (2026-06-10 00:40:00 IST)

Examined approaches for handling class imbalance in MRI image normalization methods.
Sampling strategies continue to be widely adopted.



---

### Daily Update (2026-06-10 02:31:45 IST)

Analyzed recent trends shaping MRI image registration techniques.
Foundation models and self-supervised approaches are receiving increased attention.



---

### Daily Update (2026-06-10 08:15:49 IST)

Studied evaluation protocols commonly applied to volumetric tumor assessment.
Cross-validation strategies vary substantially between studies.



---

### Daily Update (2026-06-11 01:20:49 IST)

Investigated image registration workflows related to MRI cohort-based tumor studies.
Alignment quality appears important for comparative analysis.



---

### Daily Update (2026-06-11 02:56:23 IST)

Investigated image registration workflows related to MRI image denoising techniques.
Alignment quality appears important for comparative analysis.



---

### Daily Update (2026-06-11 10:11:29 IST)

Looked into automated quality control methods for MRI image registration techniques.
Early detection of problematic scans may reduce downstream errors.



---

### Daily Update (2026-06-11 22:21:37 IST)

Reviewed recent benchmark studies connected to volumetric tumor assessment.
Cross-dataset evaluation is frequently used to assess robustness.



---

### Daily Update (2026-06-12 00:26:52 IST)

Reviewed recent publications involving convolutional neural networks for MRI classification.
Many studies focus on improving robustness across institutions.



---

### Daily Update (2026-06-12 02:54:18 IST)

Read about explainability techniques associated with bias field correction in MRI scans.
Understanding model decisions remains important for medical applications.



---

### Daily Update (2026-06-12 09:14:18 IST)

Investigated image registration workflows related to MRI image registration techniques.
Alignment quality appears important for comparative analysis.



---

### Daily Update (2026-06-13 00:09:56 IST)

Investigated multimodal approaches linked to radiomics feature extraction from MRI.
Combining complementary MRI sequences may enhance performance.



---

### Daily Update (2026-06-13 02:33:03 IST)

Compared recent architectures applied to clinical MRI dataset analysis.
Model complexity does not always translate to better performance.



---

### Daily Update (2026-06-13 09:42:26 IST)

Compared feature extraction pipelines used in brain MRI preprocessing techniques.
Some methods prioritize interpretability over predictive performance.



---

### Daily Update (2026-06-13 12:52:27 IST)

Reviewed literature discussing dataset harmonization for deep learning for brain tumor diagnosis.
Reducing scanner-specific variation could improve generalization.



---

### Daily Update (2026-06-14 01:24:06 IST)

Looked into common challenges encountered during healthy vs tumor MRI classification.
Data heterogeneity remains a recurring issue in published studies.



---

### Daily Update (2026-06-14 01:48:32 IST)

Compared traditional machine learning and deep learning methods for multimodal MRI tumor classification.
Performance differences often depend on dataset size and quality.



---

### Daily Update (2026-06-14 03:32:46 IST)

Explored how dataset characteristics impact brain MRI preprocessing techniques.
Class distribution and cohort diversity seem important for evaluation.



---

### Daily Update (2026-06-14 12:09:06 IST)

Spent time investigating challenges related to deep learning for brain tumor diagnosis.
Differences in MRI acquisition protocols appear to affect downstream results.



---

### Daily Update (2026-06-15 00:29:08 IST)

Reviewed recent publications involving skull stripping for brain MRI.
Many studies focus on improving robustness across institutions.



---

### Daily Update (2026-06-15 01:51:00 IST)

Reviewed examples of clinical applications involving glioma detection from MRI scans.
Practical deployment often requires extensive validation across cohorts.



---

### Daily Update (2026-06-15 02:56:08 IST)

Studied preprocessing recommendations proposed for cross-cohort MRI classification.
Several guidelines emphasize consistency across datasets.



---

### Daily Update (2026-06-15 12:31:33 IST)

Investigated image registration workflows related to few-shot learning for MRI tumor recognition.
Alignment quality appears important for comparative analysis.



---

### Daily Update (2026-06-16 02:41:06 IST)

Investigated data augmentation practices used in MRI feature engineering for tumor detection.
Several studies report improvements when training diversity is increased.



---

### Daily Update (2026-06-16 03:16:31 IST)

Examined cohort composition for ensemble models for tumor classification.
Balanced representation may help improve generalization outcomes.



---

### Daily Update (2026-06-16 12:29:09 IST)

Explored transfer learning strategies for MRI tumor localization techniques.
Pretrained models may help when labeled MRI data is limited.



---

### Daily Update (2026-06-17 01:28:18 IST)

Analyzed segmentation outputs associated with tumor progression prediction using MRI.
Boundary precision appears important for downstream analysis.



---

### Daily Update (2026-06-17 03:12:42 IST)

Examined data quality issues impacting transfer learning for brain tumor classification.
Artifact management continues to be discussed extensively in literature.



---

### Daily Update (2026-06-17 13:26:40 IST)

Reviewed recent methodologies in brain MRI preprocessing techniques today.
Noticed several studies emphasize preprocessing consistency before model training.



---

### Daily Update (2026-06-18 00:40:14 IST)

Investigated data augmentation practices used in intensity standardization in MRI.
Several studies report improvements when training diversity is increased.



---

### Daily Update (2026-06-18 02:41:57 IST)

Studied evaluation protocols commonly applied to ensemble models for tumor classification.
Cross-validation strategies vary substantially between studies.



---

### Daily Update (2026-06-18 17:06:03 IST)

Studied evaluation protocols commonly applied to bias field correction in MRI scans.
Cross-validation strategies vary substantially between studies.

