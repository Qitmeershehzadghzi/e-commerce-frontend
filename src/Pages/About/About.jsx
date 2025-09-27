import React from 'react'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <Title text1={'About'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src={assets.about_img}
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          alt="About"
        />
        <div className="text-gray-700 space-y-5">
          <p className="leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut in dicta perferendis libero iure? Laborum eos ab quisquam!
          </p>
          <p className="leading-relaxed text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto corrupti, quos molestias neque facere eius, accusantium saepe maiores itaque reprehenderit aliquam.
          </p>
          <b className="text-2xl font-bold text-gray-900">OUR MISSION</b>
          <p className="leading-relaxed text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, inventore totam? Vero quis, laboriosam quod magnam quae aliquid laudantium maiores minima.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
          <b className="block text-xl font-semibold mb-3">Quality Assurance :</b>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
          <b className="block text-xl font-semibold mb-3">Convenience :</b>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
          <b className="block text-xl font-semibold mb-3">Exceptional Customer Service :</b>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16">
        <NewsletterBox />
      </div>
    </div>
  )
}

export default About
