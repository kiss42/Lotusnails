// Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/lotus_nailz/477044696_17964428945849856_8482358922860337623_n.jpg'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className="text-gray-800 font-sans relative scroll-smooth">
      {/* Background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
        <div className="absolute w-full h-full bg-[radial-gradient(#fce7f3_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden z-10 px-4 sm:px-8"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-pink-900/20 backdrop-blur-sm z-0" />
        <div className="z-10 max-w-xl sm:max-w-2xl text-white drop-shadow-lg space-y-6">
         <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight font-[Sofia,cursive]">
  Lotus Nailz
</h1>

          <p className="text-xl sm:text-2xl md:text-3xl italic font-light font-[Calinastiya,cursive]">
            "Elevate your essence. Adorn your fingertips."
          </p>
          <Link
            to="/services"
            aria-label="Book your appointment now"
            className="inline-block px-6 py-3 text-lg sm:text-xl bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white rounded-full shadow-md hover:scale-105 font-[Sofia,cursive] "
          >
            Book Your Glow
          </Link>
        </div>
      </section>

      {/* SVG Divider */}
      <svg
        className="w-full h-8 sm:h-16 -mt-1 text-white"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,117.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128V0H0Z"
        />
      </svg>

      {/* About Section */}
      <section className="bg-white text-center py-16 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-600 mb-4">
          About Lotus Nailz
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          <strong className="text-gray-800 font-bold">
            At Lotus Nailz, it's not just about nails — it's about you.
          </strong>{' '}
          This is your space to feel seen, express yourself, and recharge. Whether you're leveling up your look for something bold or just taking time to breathe and reset, every detail here is designed with care.
          <br /><br />
          We’re not just doing nails — we’re creating moments. Luxurious, personal, and always intentional.
        </p>
      </section>

      {/* Services Preview Section */}
      <section className="bg-pink-50 py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'Luxury Finishes',
              desc: 'Chip-free perfection with every stroke — only the finest products touch your nails.',
            },
            {
              title: 'Signature Designs',
              desc: 'Whether soft or bold, our custom nail art speaks your style fluently.',
            },
            {
              title: 'Sanitized Studio',
              desc: 'Relax in a clean, calm space where your safety is as important as your beauty.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home
