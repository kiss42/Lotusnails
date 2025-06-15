import React from 'react';
import { Link } from 'react-router-dom';

import About from '../components/About';
import WhyChooseUs from '../pages/WhyChooseUs'; // Adjust path if needed
import Testimonials from '../components/Testimonials'; // Make sure this exists

const Home = () => {
  return (
    <main className="scroll-smooth font-[Sofia,cursive]">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff0f5] via-[#ffd6e8] to-[#ffb6c1] text-center px-6 py-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#e91e63] drop-shadow-lg">
            Lotus Nailz
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 italic font-[Calinastiya,cursive]">
            “Elevate your essence. Adorn your fingertips.”
          </p>
          <Link
            to="/services"
            className="inline-block mt-6 px-8 py-3 text-lg sm:text-xl bg-[#e91e63] hover:bg-[#d81b60] text-white rounded-full shadow-xl transition-transform hover:scale-105"
          >
            Book Your Glow
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
    </main>
  );
};

export default Home;
