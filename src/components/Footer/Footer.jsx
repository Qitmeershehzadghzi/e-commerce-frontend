import React from 'react'
import { assets } from '../../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <img 
            src={assets.logo} 
            className="w-32 mb-4 hover:scale-105 transition-transform duration-500" 
            alt="logo" 
          />
          <p className="text-sm leading-relaxed text-gray-400 hover:text-gray-200 transition-colors duration-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex provident dicta odio culpa dolor distinctio quidem dolorum ad assumenda iusto nobis soluta vitae eos ipsa, iure commodi fugit placeat exercitationem.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold text-white mb-3 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded-full after:mt-1">
            COMPANY
          </p>
          <ul className="space-y-2 text-gray-400">
            {['Home', 'About Us', 'Delivery', 'Privacy Policy'].map((item, i) => (
              <li 
                key={i} 
                className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold text-white mb-3 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-indigo-500 after:rounded-full after:mt-1">
            GET IN TOUCH
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-indigo-400 transition-colors duration-300">
              +92 3053158512
            </li>
            <li className="hover:text-indigo-400 transition-colors duration-300">
              qitmeershehzad1@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
          © 2023 All rights reserved | This template is made with ❤️ by Qitmeer Shehzad
        </p>
      </div>
    </div>
  )
}

export default Footer
