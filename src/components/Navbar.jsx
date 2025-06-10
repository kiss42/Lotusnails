import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/lotuslogo.png'

const Navbar = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm px-4 py-3 sm:px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Lotus Logo" className="h-8 w-8 object-contain hover:animate-pulse" />
        <span className="text-pink-600 font-bold text-xl">Lotus Nailz</span>
      </Link>

      <nav className="hidden md:flex gap-6 text-sm">
        <Link to="/services" className="hover:text-pink-500">Services</Link>
        <Link to="/gallery" className="hover:text-pink-500">Gallery</Link>
        <Link to="/contact" className="hover:text-pink-500">Contact</Link>
      </nav>

      {isHome && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-600 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t mt-2 shadow-md p-4 space-y-3 md:hidden">
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block text-pink-600">Services</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className="block text-pink-600">Gallery</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-pink-600">Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
