import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DetectionProvider } from './context/DetectionContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DetectionProvider>
      <App />
    </DetectionProvider>
  </StrictMode>
);