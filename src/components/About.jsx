import React, { useState, useEffect } from 'react';

import about1 from '../assets/lotus_nailz/311835933_928777394754429_5600355358869993479_n.jpg';
import about2 from '../assets/lotus_nailz/497715463_17974334756849856_6955248523702803621_n.jpg';
import about3 from '../assets/lotus_nailz/494718927_17973204467849856_4002605963021813291_n.jpg';
import about4 from '../assets/lotus_nailz/491442376_17972215424849856_5044269165407674738_n.jpg';

const aboutImages = [about1, about2, about3, about4];
const aboutImage = aboutImages[Math.floor(Math.random() * aboutImages.length)];

const About = () => {
  const fullTitle = 'About Lotus Nailz';
  const [typedTitle, setTypedTitle] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullTitle.length) {
      const timer = setTimeout(() => {
        setTypedTitle((prev) => prev + fullTitle.charAt(index));
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="relative bg-gradient-to-br from-white via-pink-50 to-pink-100 py-28 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl w-full h-[400px] sm:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        />

        {/* Text */}
        <div className="text-left animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 font-[Sofia,cursive] mb-4">
            {typedTitle}
            {typedTitle.length < fullTitle.length && <span className="ml-1 animate-pulse">|</span>}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-light">
            <span className="block italic text-xl text-pink-500 font-[Calinastiya,cursive] mb-4">
              “Where beauty meets balance.”
            </span>
            <strong className="text-gray-800 font-semibold">
              At Lotus Nailz, every brushstroke is a moment for you.
            </strong>{' '}
            Our studio is designed for self-expression and serenity. Whether bold, delicate, or just intentional—you’ll leave with more than polished nails. You’ll leave with peace.
          </p>
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold shadow-lg transition-all"
          >
            Discover Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
