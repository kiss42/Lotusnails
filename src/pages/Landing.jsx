import React from 'react';
import { useNavigate } from 'react-router-dom';
import lotusVideo from '../assets/lotus.mp4';

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Responsive video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover"
      >
        <source src={lotusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enter button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-fadeIn px-4">
        <button
          onClick={handleEnter}
          className="w-full max-w-[180px] px-6 py-3 text-base sm:text-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 active:scale-95"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Landing;
