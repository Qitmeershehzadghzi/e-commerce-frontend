import React from 'react'
// import "./NewsletterBox.css";

function NewsletterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className='newsletter-box bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white text-center py-12 px-6 rounded-2xl shadow-2xl'>
      <p className='pr-3 text-2xl font-bold tracking-wide mb-2'>subscribe & get 12% off</p>
      <p className='pr-4 text-gray-300 text-sm mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, sed?</p>
      <form onSubmit={onSubmitHandler} className='form flex flex-col md:flex-row items-center justify-center gap-4'>
        <input className='email w-full md:w-2/4 px-4 py-3 rounded-full outline-none border border-gray-500 focus:ring-2 focus:ring-indigo-400 text-black' type="email" placeholder="Enter Your Email" required/>
        <button type='submit' className='but bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
