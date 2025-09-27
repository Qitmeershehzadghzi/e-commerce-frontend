import React from 'react'
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 overflow-hidden'>
      
      {/* Content */}
      <div className='relative z-10 text-center px-6 md:px-12'>
        <div className='space-y-2 animate-fadeIn'>
          <p className='text-sm md:text-base font-semibold tracking-[0.25em] text-indigo-400 uppercase'>
            Our Bestsellers
          </p>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl mt-4 leading-tight animate-slideUp'>
          Latest Arrival
        </h1>

        {/* Buttons */}
        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fadeInSlow'>
          <button
            onClick={() => navigate("/collection")}
            className='bg-indigo-600 text-white px-6 py-3 rounded-full shadow-xl 
                       hover:bg-indigo-500 hover:scale-105 
                       transition-all duration-300 ease-in-out w-full sm:w-auto'
          >
            Shop Now
          </button>

          <button
            className='border border-gray-400 text-gray-300 px-6 py-3 rounded-full shadow-lg 
                       hover:bg-white hover:text-black hover:scale-105 
                       transition-all duration-300 ease-in-out w-full sm:w-auto'
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <img
        className='absolute bottom-0 right-0 w-2/3 sm:w-1/2 max-w-md md:max-w-lg object-contain opacity-90 transform 
                   animate-slideIn'
        src={assets.hero_img}
        alt=""
      />

      {/* Overlay gradient for better text visibility on small screens */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:hidden"></div>
    </div>
  )
}

export default Hero
