import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '💖',
      title: 'Personal Touch',
      description: 'Each design is crafted with care to reflect your unique personality.'
    },
    {
      icon: '🧼',
      title: 'Clean Tools',
      description: 'We prioritize hygiene and sterilization for your peace of mind.'
    },
    {
      icon: '🕰',
      title: 'Punctuality',
      description: 'Your time matters—expect prompt service every visit.'
    },
    {
      icon: '🎨',
      title: 'Custom Artistry',
      description: 'From simple elegance to bold statements, we design to your vibe.'
    },
    {
      icon: '🌸',
      title: 'Tranquil Atmosphere',
      description: 'Relax in our calm, welcoming studio designed for self-care.'
    },
    {
      icon: '🌟',
      title: 'Pro-Level Quality',
      description: 'We use high-end polishes and techniques for long-lasting beauty.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-24 px-6 sm:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-600 font-[Sofia,cursive] mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-pink-500 mb-2 font-[Sofia,cursive]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
