import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// NOTE: AI models are NOT preloaded on app start anymore.
// They load lazily (and are cached) only when an interview starts,
// so the app opens instantly instead of downloading ~10MB of TFJS models.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);