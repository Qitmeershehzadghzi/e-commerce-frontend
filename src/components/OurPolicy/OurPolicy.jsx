import React from 'react'
// import "./OurPolicy.css";
import { assets } from "../../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className='our-policy grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 bg-gray-900 rounded-2xl shadow-lg text-center'>
      <div className='our-policy__container flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg'>
        <img src={assets.exchange_icon} className='exchange w-16 h-16 mb-4' alt="" />
        <p className='pr-1 text-lg font-semibold text-white'>Easy Exchange Policy</p>
        <p className='pr-2 text-gray-400 text-sm mt-2'>We offer hassle free exchange policy</p>
      </div>
      <div className='our-policy__container flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg'>
        <img src={assets.quality_icon} className='exchange w-16 h-16 mb-4' alt="" />
        <p className='pr-2 text-lg font-semibold text-white'>7 days return policy</p>
        <p className='pr-1 text-gray-400 text-sm mt-2'>We provide 7 days free return policy</p>
      </div>
      <div className='our-policy__container flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg'>
        <img src={assets.support_img} className='exchange w-16 h-16 mb-4' alt="" />
        <p className='pr-1 text-lg font-semibold text-white'>Best Customer Support</p>
        <p className='pr-2 text-gray-400 text-sm mt-2'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
