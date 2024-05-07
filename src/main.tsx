import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
