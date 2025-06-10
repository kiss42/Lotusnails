// pages/Contact.jsx
import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold text-pink-600 mb-4">Let’s Get in Touch</h2>
      <p className="text-gray-600 max-w-xl mb-10">
        Whether you're ready to book, have a question, or just want to say hi — we’re here for it. Reach out and we’ll get back to you soon.
      </p>

      <form className="w-full max-w-lg space-y-6">
        <div className="text-left">
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            placeholder="Your name"
          />
        </div>
        <div className="text-left">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="text-left">
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            placeholder="Let us know how we can help..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="mt-16 text-sm text-gray-500">
        <p>
          You can always reach us at our email — it's private for now,
          but submit the form and we’ll be in touch. 💅
        </p>
        <p className="mt-2">
          Or DM us on Instagram
          <a
            href="https://www.instagram.com/lotus_nailz2/?igsh=MTdjeHJlamFvMDFrdA%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 font-medium ml-1"
          >
            @lotus_nailz2
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact