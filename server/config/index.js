import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const UPLOAD_DIR = path.join(ROOT_DIR, 'uploads');
const LOG_DIR = path.join(ROOT_DIR, '..', 'logs');
const API_PREFIX = '/api';
const SERVER_PORT = process.env.PORT || 3000;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'application/dicom'];

export {
  ROOT_DIR,
  UPLOAD_DIR,
  LOG_DIR,
  API_PREFIX,
  SERVER_PORT,
  MAX_FILE_SIZE,
  ALLOWED_MIME_TYPES
};
