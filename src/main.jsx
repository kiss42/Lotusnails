import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import { BookingProvider } from './context/BookingContext';
import lotusIcon from './assets/lotuslogo.png';

// Dynamically set favicon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = lotusIcon;
document.head.appendChild(link);

// Render app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </React.StrictMode>
);
