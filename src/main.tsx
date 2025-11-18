
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./i18n";
import './index.css'
import { ThemeProvider } from "./context/ThemeContext";
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
