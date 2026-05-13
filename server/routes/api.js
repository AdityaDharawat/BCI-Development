import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import cnnModel from '../model/neuralnetwork.js';
import { UPLOAD_DIR, MAX_FILE_SIZE, ALLOWED_MIME_TYPES } from '../config/index.js';
import { log, error } from '../utils/logger.js';

const router = express.Router();
const historyCache = [];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }
    cb(null, UPLOAD_DIR);
  },
  filename(req, file, cb) {
    const safeName = `${Date.now()}-${file.originalname}`.replace(/\s+/g, '_');
    cb(null, safeName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter(req, file, cb) {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      return cb(new Error('Only JPG, PNG, and DICOM files are allowed'));
    }
    cb(null, true);
  }
});

const createHistoryEntry = ({ scanName, detected, confidence }) => {
  const timestamp = new Date().toISOString();
  const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  return {
    id,
    patientId: `P-${Math.floor(10000 + Math.random() * 90000)}`,
    scanName,
    date: timestamp,
    result: detected ? 'positive' : 'negative',
    confidence,
    imageUrl: null
  };
};

const inferTumorTypeFromFilename = (originalName) => {
  const name = (originalName || '').toLowerCase();

  // Priority: explicit no-tumor tokens
  if (name.includes('notumor') || /no[-_\s]?tum(or)?/.test(name) || name.includes('no_tumor') || name.includes('no-')) {
    return 'No tumor';
  }
  if (name.includes('no')) {
    // Example: files that contain 'no' (your requirement)
    return 'No tumor';
  }

  // Glioma
  if (name.includes('gl') || name.includes('gli')) {
    return 'Glioma';
  }

  // Meningioma
  if (name.includes('me') || name.includes('meni')) {
    return 'Meningioma';
  }

  // Pituitary
  if (name.includes('pi') || name.includes('pit')) {
    return 'Pituitary';
  }

  return 'Unknown';
};

router.post('/analyze', upload.single('scan'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No scan file uploaded' });
  }

  try {
    const filePath = path.join(UPLOAD_DIR, req.file.filename);
    const prediction = await cnnModel.predict(filePath);

    


    const tumorTypeFromName = inferTumorTypeFromFilename(req.file.originalname);

    const record = createHistoryEntry({
      scanName: req.file.originalname,
      detected: prediction.detected,
      confidence: prediction.confidence
    });

    historyCache.unshift(record);
    if (historyCache.length > 50) {
      historyCache.pop();
    }

    log(`Analysis completed for ${req.file.originalname}: ${prediction.detected ? 'positive' : 'negative'} (${prediction.confidence.toFixed(3)}) | filenameType=${tumorTypeFromName}`);

    return res.json({
      ...prediction,
      tumorTypeFromName,
    });
  } catch (err) {
    error(`Prediction failed: ${err.message}`);
    return res.status(500).json({ error: 'Prediction failed, please try again later' });
  }
});

router.get('/history', (req, res) => {
  return res.json(historyCache);
});

router.get('/detection/:id', (req, res) => {
  const item = historyCache.find((record) => record.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Detection result not found' });
  }
  return res.json(item);
});

export default router;
