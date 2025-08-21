import React from 'react'
import "./OurPolicy.css";
import { assets } from "../../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className='our-policy'>
      <div className='our-policy__container'>
<img src={assets.exchange_icon} className='exchange' alt="" />
<p className='pr-1'>Easy Exchange Policy</p>
<p className='pr-2'>We offer hassle  free exchange policy</p>
      </div>
            <div className='our-policy__container'>
<img src={assets.quality_icon} className='exchange' alt="" />
<p className='pr-2'>7 days return policy</p>
<p className='pr-1'>We provide  7 days  free return  policy</p>
      </div>
            <div className='our-policy__container'>
<img src={assets.support_img } className='exchange' alt="" />
<p className='pr-1'>Best Customer Support</p>
<p className='pr-2'>We provide 24/7  customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
