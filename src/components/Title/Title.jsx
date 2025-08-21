import React from 'react'
import "./Title.css";

function Title({text1,text2}) {
  return (
    <div className='Title'>
      <p className='p-1'>{text1}<span className='span'>{text2}</span></p>
      <p className='p-2'></p>
    </div>
  )
}

export default Title
