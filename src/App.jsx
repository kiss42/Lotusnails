import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import AdminBookingSync from './components/AdminBookingSync';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { BookingProvider } from './context/BookingContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white text-deep">
      {!hideNavbar && <Navbar />}
      <main className="p-0">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminBookingSync />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BookingProvider>
      <Router>
        <AppContent />
      </Router>
    </BookingProvider>
  );
}

export default App;
