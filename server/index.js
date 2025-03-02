import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/dicom'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPG, PNG, and DICOM files are allowed'));
    }
    cb(null, true);
  }
});

// Mock detection history data
const detectionHistory = [
  {
    id: '1',
    patientId: 'P-10045',
    scan <boltArtifact id="neurovision-ai-brain-tumor-detection" title="NeuroVisionAI - Brain Tumor Detection Application">
  }
]