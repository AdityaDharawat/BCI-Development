import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOG_DIR = path.join(__dirname, '..', '..', 'logs');

const ensureLogDirectory = () => {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
};

const formatMessage = (level, message) => {
  const timestamp = new Date().toISOString();
  return `${timestamp} [${level}] ${message}`;
};

export const log = (message) => {
  ensureLogDirectory();
  const formatted = formatMessage('INFO', message);
  fs.appendFileSync(path.join(LOG_DIR, 'server.log'), `${formatted}\n`, 'utf-8');
  console.log(formatted);
};

export const error = (message) => {
  ensureLogDirectory();
  const formatted = formatMessage('ERROR', message);
  fs.appendFileSync(path.join(LOG_DIR, 'server.log'), `${formatted}\n`, 'utf-8');
  console.error(formatted);
};
