import React from 'react'
import "./Hero.css";
import { assets } from "../../assets/frontend_assets/assets";

function Hero() {
  return (
    <div className='hero-containerw'>
      <div className='container'>
        <div className='hero-content'>
<p className='para'></p>
<p className='para1'>OUR BESTSELLERS</p>
        </div>
        <h1 className='heading'>Latest Arrival</h1>
        <div className='hero-btns'>
<p className='para2'>Shop Now</p>
<p className='para3'></p>
        </div>
      </div>
      <img className='image-111' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
