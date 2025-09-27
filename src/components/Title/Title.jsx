import React from 'react'

function Title({ text1, text2 }) {
  return (
    <div className="Title text-center my-8">
      {/* Heading */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight transition-all duration-300 hover:scale-105">
        {text1}
        <span className="ml-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
          {text2}
        </span>
      </p>

      {/* Underline Animation */}
      <div className="relative flex justify-center mt-4">
        <span className="block w-20 h-1 rounded bg-indigo-600 transition-all duration-500 hover:w-32"></span>
      </div>
    </div>
  )
}

export default Title
