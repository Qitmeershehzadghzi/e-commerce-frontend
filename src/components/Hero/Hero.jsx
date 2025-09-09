import React from 'react'
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='hero-containerw relative w-full h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 overflow-hidden'>
      <div className='container relative z-10 text-center px-6'>
        <div className='hero-content space-y-3'>
          <p className='para text-lg tracking-wide uppercase text-gray-300'></p>
          <p className='para1 text-sm font-semibold tracking-[0.2em] text-indigo-400'>OUR BESTSELLERS</p>
        </div>
        <h1 className='heading text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mt-4'>
          Latest Arrival
        </h1>
        <div className='hero-btns mt-8 flex items-center justify-center gap-6'>
          <p 
            onClick={() => navigate("/collection")} 
            className='para2 cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300'
          >
            Shop Now
          </p>
          <p className='para3 cursor-pointer border border-gray-400 text-gray-300 px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-all duration-300'></p>
        </div>
      </div>
      <img className='image-111 absolute bottom-0 right-0 w-1/2 max-w-lg object-contain opacity-90' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
