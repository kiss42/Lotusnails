import React from 'react'

const mediaModules = import.meta.glob('../assets/lotus_nailz/*.{jpg,jpeg,png,mp4}', {
  eager: true,
  as: 'url',
})

const media = Object.values(mediaModules)

const Gallery = () => {
  if (!media.length) {
    return (
      <div className="pt-32 text-center text-gray-500">
        No media found in lotus_nailz folder.
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">Gallery</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-3 text-lg">
          Peek into our latest work — photo & video nails, Instagram-style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((src, index) =>
          src.endsWith('.mp4') ? (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition duration-300"
            >
              <video
                src={src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-[300px] object-cover"
              />
            </div>
          ) : (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={src}
                alt={`Media ${index + 1}`}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Gallery
