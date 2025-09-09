import React from 'react'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'
// import './About.css'
function About() {
  return (
    <div className='div-1 max-w-7xl mx-auto px-6 py-12'>
     <div className='div-2 text-center mb-10'>
      <Title text1={'About'} text2={'US'}/>
      </div> 
      <div className='div-3 flex flex-col md:flex-row items-center gap-8 mb-12'>
        <img src={assets.about_img} className='about w-full md:w-1/2 rounded-2xl shadow-lg' alt="" />
        <div className='div-4 text-gray-700 space-y-5'>
          <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut in dicta perferendis libero iure? Laborum eos ab quisquam!</p>
          <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto corrupti, quos molestias neque facere eius, accusantium saepe maiores itaque reprehenderit aliquam.</p>
          <b className='b-tagg text-xl font-semibold text-gray-900'>OUR MISSION</b>
          <p className='leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, inventore totam? Vero quis, laboriosam quod magnam quae aliquid laudantium maiores minima.</p>
        </div>
      </div>
      <div className='div-5 text-center mb-8'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='div-6 grid md:grid-cols-3 gap-8 text-gray-700'>
        <div className='div-7 bg-gray-50 p-6 rounded-xl shadow'>
          <b className='block text-lg font-semibold mb-2'>Quality Assurance :</b>
          <p className='pppp text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.</p>
        </div>
        <div className='div-7 bg-gray-50 p-6 rounded-xl shadow'>
          <b className='block text-lg font-semibold mb-2'>Convience :</b>
          <p className='pppp text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.</p>
        </div>
        <div className='div-7 bg-gray-50 p-6 rounded-xl shadow'>
          <b className='block text-lg font-semibold mb-2'>Exceptional Customer Service :</b>
          <p className='pppp text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
