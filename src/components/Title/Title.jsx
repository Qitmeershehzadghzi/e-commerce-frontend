import React from 'react'
// import "./Title.css";

function Title({text1,text2}) {
  return (
    <div className='Title text-3xl md:text-4xl font-bold text-gray-900 text-center'>
      <p className='p-1 tracking-wide'>
        {text1}
        <span className='span text-indigo-600 ml-2'>{text2}</span>
      </p>
      <p className='p-2 w-16 h-1 bg-indigo-600 mx-auto mt-3 rounded'></p>
    </div>
  )
}

export default Title
