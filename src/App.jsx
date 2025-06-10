import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import AdminBookingSync from './components/AdminBookingSync'
import { BookingProvider } from './context/BookingContext'

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-white text-deep">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-4xl font-bold text-lotus mb-4">Welcome to Lotus Nailz</h1>
                    <p className="text-lg text-gray-700">
                      Professional nail care, luxury, and artistry all in one place.
                    </p>
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/admin" element={<AdminBookingSync />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BookingProvider>
  )
}

export default App
