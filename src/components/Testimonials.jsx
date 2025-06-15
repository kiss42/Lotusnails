import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: 'Absolutely stunning nails every time! 💅✨',
    name: 'A.R.',
    stars: 5,
    emoji: '✨'
  },
  {
    quote: 'It’s my self-care sanctuary. Obsessed. 🌸',
    name: 'J.L.',
    stars: 5,
    emoji: '💖'
  },
  {
    quote: 'The vibe, the quality, the detail — 10/10. 🔥',
    name: 'M.N.',
    stars: 4,
    emoji: '🌷'
  },
]

const Testimonials = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-10 font-[Sofia,cursive]">Client Love</h2>
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-6"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="w-[360px] bg-pink-50 rounded-3xl shadow-lg p-6 snap-center text-left shrink-0 transition-transform hover:scale-105 duration-300 whitespace-normal"
          >
            <div className="text-yellow-400 mb-3 text-lg">
              {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed break-words">“{t.quote}”</p>
            <footer className="mt-4 text-pink-600 font-bold text-sm">{t.emoji} {t.name}</footer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials