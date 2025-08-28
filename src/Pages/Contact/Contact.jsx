import React from 'react'
import './Contact.css'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'
function Contact() {
  return (
    <div className='div-1'>
      <div className='div-2'>
<Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='div-3'>
        <img src={assets.contact_img} className='clas' alt="" />
        <div className='div-4'>
<p className='p-1'>Our store</p>
<p className='p-2'>54709 railway station <br />Suite 350 karachi,pakistan</p>
<p className='p-3'>Yel:(92)3053158512 <br />Email:dummy@gmail.com</p>
<p className='p-4'>Careers at forever</p>
<p className='p-5'>Learn more about our teams and job opening</p>
<button className='button'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
