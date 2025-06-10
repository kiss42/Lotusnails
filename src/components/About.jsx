import React from 'react'

import about1 from '../assets/lotus_nailz/311835933_928777394754429_5600355358869993479_n.jpg'
import about2 from '../assets/lotus_nailz/497715463_17974334756849856_6955248523702803621_n.jpg'
import about3 from '../assets/lotus_nailz/494718927_17973204467849856_4002605963021813291_n.jpg'
import about4 from '../assets/lotus_nailz/491442376_17972215424849856_5044269165407674738_n.jpg'

const aboutImages = [about1, about2, about3, about4]
const aboutImage = aboutImages[Math.floor(Math.random() * aboutImages.length)]

const About = () => {
  return (
    <section
      className="relative text-center py-20 px-6 text-white font-[Sofia,cursive]"
      style={{
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-200 mb-4">
          About Lotus Nailz
        </h2>
        <p className="text-lg leading-relaxed">
          <strong className="text-white font-bold">
            At Lotus Nailz, it's not just about nails — it's about you.
          </strong>{' '}
          This is your space to feel seen, express yourself, and recharge. Whether you're leveling up your look for something bold or just taking time to breathe and reset, every detail here is designed with care.
          <br /><br />
          We’re not just doing nails — we’re creating moments. Luxurious, personal, and always intentional. Come for the beauty, stay for the energy.
        </p>
      </div>
    </section>
  )
}

export default About
