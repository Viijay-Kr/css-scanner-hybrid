import { ScannerProvider } from '@browser-scan/scanner';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StoreProvider } from './store/Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScannerProvider devTools={import.meta.env.MODE === 'dev'}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ScannerProvider>
  </React.StrictMode>,
);
