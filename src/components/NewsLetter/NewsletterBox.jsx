import React from 'react'
import "./NewsletterBox.css";
function NewsletterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className='newsletter-box'>
      <p className='pr-3'>subscribe & get 12% off</p>
      <p className='pr-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, sed?</p>
      <form onSubmit={onSubmitHandler}  className='form'>
<input className='email' type="email" placeholder="Enter Your Email" required/>
<button type='submit' className='but'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
