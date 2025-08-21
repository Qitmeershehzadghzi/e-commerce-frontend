import React from 'react'
import "./NewsletterBox.css";
function NewsletterBox() {
  return (
    <div className='newsletter-box'>
      <p className='pr-3'>ssubscribe & get 12% off</p>
      <p className='pr-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, sed?</p>
      <form className='form'>
<input className='email' type="email" placeholder="Enter Your Email" required/>
<button type='submit' className='but'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
