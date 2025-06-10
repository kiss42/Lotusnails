import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import AppRouter from './router.jsx'
import { BookingProvider } from './context/BookingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <AppRouter />
    </BookingProvider>
  </React.StrictMode>
)
