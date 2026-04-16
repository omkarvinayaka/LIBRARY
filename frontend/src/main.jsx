import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/style.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

// Make backend URL always available to legacy pages
window.VEMU_SERVER_API_BASE = API_BASE;
window.VEMU_SMS_API_BASE = API_BASE;

localStorage.setItem('vemu_sms_api_base', API_BASE);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);