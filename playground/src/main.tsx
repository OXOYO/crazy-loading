import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PreferencesProvider } from './preferences/PreferencesProvider';
import { applyDocumentPreferences, readStoredLocale, readStoredTheme } from './preferences/storage';
import './styles.css';

applyDocumentPreferences(readStoredLocale(), readStoredTheme());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </StrictMode>,
);
