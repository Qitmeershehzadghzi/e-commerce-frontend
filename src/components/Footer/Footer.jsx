import React from 'react'
import { assets } from '../../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className='footer bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20'>
      <div className='footer__container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
        <div className='flex flex-col items-start'>
          <img src={assets.logo} className='logo w-32 mb-4' alt="" />
          <p className='paraGraph text-sm leading-relaxed text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex provident dicta odio culpa dolor distinctio quidem dolorum ad assumenda iusto nobis soluta vitae eos ipsa, iure commodi fugit placeat exercitationem.
          </p>
        </div>

        <div className='div'>
          <p className='ft-p text-lg font-semibold text-white mb-3'>COMPANY</p>
          <ul className='ul space-y-2 text-gray-400'>
            <li className='hover:text-white transition'>Home</li>
            <li className='hover:text-white transition'>About US</li>
            <li className='hover:text-white transition'>Delivery</li>
            <li className='hover:text-white transition'>Privacy Policy</li>
          </ul>
        </div>

        <div className='div-1'>
          <p className='ft text-lg font-semibold text-white mb-3'>GET IN TOUCH</p>
          <ul className='ul-1 space-y-2 text-gray-400'>
            <li className='hover:text-black transition'>+92 3053158512</li>
            <li className='hover:text-black transition'>qitmeershehzad1@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-700 pt-6 text-center'>
        <p className='pr6 text-sm text-gray-500'>
          © 2023 All rights reserved | This template is made with ❤️ by Qitmeer Shehzad
        </p>
      </div>
    </div>
  )
}

export default Footer
