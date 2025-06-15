import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/lotuslogo.png';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full shadow-xl px-6 py-3 flex items-center justify-between max-w-md sm:max-w-xl w-full backdrop-blur-sm animate-fade-in">
      <Link to="/" className="flex items-center space-x-2 group">
        <img
          src={logo}
          alt="Lotus Logo"
          className="h-8 w-8 object-contain group-hover:animate-wiggle"
        />
        <span className="text-[#ff3c87] font-bold text-lg sm:text-xl group-hover:tracking-wide transition-all duration-300">
          Lotus Nailz
        </span>
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#ff3c87] text-2xl focus:outline-none hover:animate-bounce"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className="hidden md:flex gap-4 text-sm font-semibold">
        <Link to="/services" className="hover:text-[#ff3c87] transition duration-300 ease-in-out hover:scale-105">Services</Link>
        <Link to="/gallery" className="hover:text-[#ff3c87] transition duration-300 ease-in-out hover:scale-105">Gallery</Link>
        <Link to="/contact" className="hover:text-[#ff3c87] transition duration-300 ease-in-out hover:scale-105">Contact</Link>
      </nav>

      {menuOpen && (
        <div className="absolute top-full mt-3 left-0 w-full bg-white rounded-lg shadow-md py-4 px-6 text-center space-y-2 md:hidden animate-slide-down">
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block text-[#ff3c87] hover:font-bold transition-transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="block text-[#ff3c87] hover:font-bold transition-transform hover:scale-105"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-[#ff3c87] hover:font-bold transition-transform hover:scale-105"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
