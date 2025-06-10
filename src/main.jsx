import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import AppRouter from './router.jsx'
import { BookingProvider } from './context/BookingContext'
import lotusIcon from './assets/lotuslogo.png'

const link = document.createElement('link')
link.rel = 'icon'
link.type = 'image/png'
link.href = lotusIcon
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <AppRouter />
    </BookingProvider>
  </React.StrictMode>
)
