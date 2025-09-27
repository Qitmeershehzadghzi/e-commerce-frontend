import React from 'react'
// import "./NewsletterBox.css";

function NewsletterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="newsletter-box bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white text-center py-12 px-6 md:px-12 lg:px-20 rounded-2xl shadow-2xl max-w-5xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Heading */}
      <p className="text-2xl md:text-3xl font-extrabold tracking-wide mb-2 animate-fadeIn">
        Subscribe & Get <span className="text-indigo-400">12% OFF</span>
      </p>

      {/* Sub-text */}
      <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
        Be the first to know about our latest arrivals, exclusive offers, and special deals.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="form flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn delay-500"
      >
        <input
          className="email w-full sm:w-2/3 md:w-2/4 px-4 py-3 rounded-full outline-none border border-gray-600 focus:ring-2 focus:ring-indigo-400 text-black placeholder-gray-500 transition duration-300"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="but bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
