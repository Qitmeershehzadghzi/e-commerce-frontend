import React from 'react'
import { assets } from "../../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className='our-policy grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl text-center'>
      
      {/* Card 1 */}
      <div className='our-policy__container flex flex-col items-center p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer'>
        <img 
          src={assets.exchange_icon} 
          className='w-16 h-16 mb-5 animate-bounce-slow' 
          alt="Exchange Icon" 
        />
        <p className='text-lg md:text-xl font-semibold text-white tracking-wide'>
          Easy Exchange Policy
        </p>
        <p className='text-gray-400 text-sm md:text-base mt-3 leading-relaxed'>
          We offer hassle free exchange policy
        </p>
      </div>

      {/* Card 2 */}
      <div className='our-policy__container flex flex-col items-center p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer'>
        <img 
          src={assets.quality_icon} 
          className='w-16 h-16 mb-5 animate-pulse' 
          alt="Quality Icon" 
        />
        <p className='text-lg md:text-xl font-semibold text-white tracking-wide'>
          7 Days Return Policy
        </p>
        <p className='text-gray-400 text-sm md:text-base mt-3 leading-relaxed'>
          We provide 7 days free return policy
        </p>
      </div>

      {/* Card 3 */}
      <div className='our-policy__container flex flex-col items-center p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer'>
        <img 
          src={assets.support_img} 
          className='w-16 h-16 mb-5 animate-bounce' 
          alt="Support Icon" 
        />
        <p className='text-lg md:text-xl font-semibold text-white tracking-wide'>
          Best Customer Support
        </p>
        <p className='text-gray-400 text-sm md:text-base mt-3 leading-relaxed'>
          We provide 24/7 customer support
        </p>
      </div>

    </div>
  )
}

export default OurPolicy
