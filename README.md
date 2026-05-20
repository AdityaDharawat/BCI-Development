# NeuroVisionAI — Brain MRI Tumor Classification

## Overview
NeuroVisionAI is a modern brain MRI tumor classification web application designed for medical-grade deployment and research workflows. It combines a lightweight React frontend with a Node.js backend and a Vision Transformer inference pipeline to analyze MRI scans and deliver robust prediction insight.

## Key Features
- Light medical UI with clean, responsive design
- Drag-and-drop MRI upload workflow
- AI-powered tumor detection with confidence score
- Prediction history and clinical guidance cards
- Dataset duplication analysis and safe cleanup tool
- Backend API routing and secure upload handling

## Technology Stack
- Frontend: React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express
- Model: TensorFlow.js Vision Transformer (demo-compatible)
- Dataset Utilities: Python, pathlib, argparse
- Build tools: Vite

## Project Structure
```
BCI-Development/
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
├── utils/
│   └── dataset/
├── tests/
├── README.md
├── package.json
└── vite.config.ts
```

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend API:
   ```bash
   npm run server
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. Open the application at `http://localhost:5173`

## Dataset Preparation
The duplicate cleanup utility is configured to inspect the dataset in `brainMRI/Training` and `brainMRI/Testing`.

If your dataset is stored elsewhere, update `configs/dataset_config.json`:
```json
{
  "raw_data_root": "brainMRI",
  "train_folder": "Training",
  "test_folder": "Testing"
}
```

## Duplicate Cleanup Utility
A dedicated dataset cleanup script is available at `utils/dataset/duplicate_checker.py`.

### Dry run mode (recommended first)
```bash
python utils/dataset/duplicate_checker.py --dry-run --backup
```

### Safe cleanup mode
```bash
python utils/dataset/duplicate_checker.py --backup
```

### Configuration options
- `--config`: custom path to dataset config JSON
- `--root`: override dataset root
- `--report`: custom report JSON path
- `--log-dir`: custom cleanup log directory

Reports are written to `utils/dataset/duplicate_report.json` and logs are stored in `utils/dataset/cleanup_logs/`.

## Backend API
The backend preserves the current prediction contract and exposes:
- `POST /api/analyze` — upload scan for inference
- `GET /api/history` — detection history
- `GET /api/detection/:id` — single detection details

The backend also supports cross-origin development and secure upload handling

## Model Integration
The model integration preserves the existing Vision Transformer inference pipeline and preprocess flow while keeping compatibility with the current dataset format.

## Future Improvements
- Add real model weight loading for production inference
- Connect prediction history to a persistent database
- Introduce server-side DICOM parsing and metadata extraction
- Add automated unit tests for dataset cleanup and API endpoints

## Notes
- This refactor keeps the current prediction flow intact while improving architecture, frontend polish, and dataset integrity tooling.
- The frontend now runs on port `5173` and proxies API calls to backend port `3000` for development.
  


## Daily AI Update - 2026-05-17 18:18:06

Automated repository maintenance update.



## Daily AI Update - 2026-05-17 20:05:58

Automated repository maintenance update.



## Daily AI Update - 2026-05-18 11:35:17

Automated repository maintenance update.



## Daily AI Update - 2026-05-18 11:57:02

Automated repository maintenance update.



## Daily AI Update - 2026-05-18 19:56:31

Automated repository maintenance update.



## Daily AI Update - 2026-05-18 20:27:34

Automated repository maintenance update.



## Daily AI Update - 2026-05-19 11:35:24

Automated repository maintenance update.



## Daily AI Update - 2026-05-19 19:53:08

Automated repository maintenance update.



## Daily AI Update - 2026-05-19 20:50:04

Automated repository maintenance update.



## Daily AI Update - 2026-05-20 13:58:55

Automated repository maintenance update.

