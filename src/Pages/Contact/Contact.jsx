import React from 'react'
// import './Contact.css'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <Title text1={'CONTACT'} text2={'US'} />
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          We’d love to hear from you! Reach out for queries, support, or career opportunities.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        {/* Left Image */}
        <img
          src={assets.contact_img}
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-500"
          alt="contact"
        />

        {/* Right Info */}
        <div className="space-y-5 text-gray-700 w-full md:w-1/2">
          <p className="text-2xl font-bold text-gray-900">Our Store</p>
          <p className="text-base leading-relaxed">
            54709 Railway Station <br /> Suite 350, Karachi, Pakistan
          </p>
          <p className="text-base leading-relaxed">
            Tel: <span className="font-semibold text-indigo-600">(92) 305-3158512</span> <br />
            Email: <span className="font-semibold text-indigo-600">dummy@gmail.com</span>
          </p>

          <div className="pt-4">
            <p className="text-xl font-semibold text-gray-900">Careers at Forever</p>
            <p className="text-sm text-gray-600 mb-3">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  )
}

export default Contact
