import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import CartTotal from '../../components/CartTotal/CartTotal'
import { assets } from '../../assets/frontend_assets/assets'
import './Placeorder.css';


function PlaceOrder() {
  const [method,setMethod]=useState('cod')
  return (
    <div className='div-1'>
     {/* Left side */}
      <div className='div-2'>
<div className='div-3'>
<Title text1={'DELIVERY'} text2={'INFORMATION'} />
</div>
<div className='div-4'>
<input type="text" placeholder="FIRST NAME" className="inp" />
<input type="text" placeholder="LAST NAME" className="inp-1" />
</div>
<input type="email" placeholder="EMAIL ADDRESS" className="inp-2" />
<input type="email" placeholder="STREET" className="inp-3" />
<div className='div-5'>
<input type="text" placeholder="CITY" className="inp-4" />
<input type="text" placeholder="STATE" className="inp-5" />
</div>
<div className='div-6'>
<input type="number" placeholder="ZIPCODE" className="inp-6" />
<input type="text" placeholder="COUNTRY" className="inp-7" />
</div>
<input type="number" placeholder="PHONE NUMBER" className="inp-6" />


      </div>
      {/* Right side */}
      <div className='div-7'>
<div className='div-8'>
<CartTotal />
</div>
<div className='div-9'>
<Title text1={'PAYMENT'} text2={'METHOD'}/>
{/* Payment method selection */}
<div className='div-10'>
<div onClick={()=>setMethod('stripe')} className='div-11'>
<p className='p-1'></p>
<img src={assets.stripe_logo} className='img-1' alt="" />
</div>
<div onClick={()=>setMethod('razorpay')} className='div-11'>
<p className='p-1'></p>
<img src={assets.razorpay_logo} className='img-1' alt="" />
</div>
<div onClick={()=>setMethod('cod')} className='div-11'>
<p className='p-1'></p>
<p className='p-2'>CASH ON DELIVERY</p>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default PlaceOrder
