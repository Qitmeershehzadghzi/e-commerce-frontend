import React from 'react'
// import './Contact.css'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'
function Contact() {
  return (
    <div className='div-1 max-w-7xl mx-auto px-6 py-12'>
      <div className='div-2 text-center mb-10'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='div-3 flex flex-col md:flex-row gap-10 items-center mb-12'>
        <img src={assets.contact_img} className='clas w-full md:w-1/2 rounded-xl shadow-lg' alt="" />
        <div className='div-4 space-y-4 text-gray-700'>
          <p className='p-1 text-xl font-semibold text-gray-900'>Our store</p>
          <p className='p-2'>54709 railway station <br />Suite 350 karachi, pakistan</p>
          <p className='p-3'>Tel: (92)3053158512 <br />Email: dummy@gmail.com</p>
          <p className='p-4 font-semibold'>Careers at forever</p>
          <p className='p-5 text-sm'>Learn more about our teams and job opening</p>
          <button className='button bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
