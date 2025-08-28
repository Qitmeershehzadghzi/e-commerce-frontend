

import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../../components/Title/Title'
import './Order.css';
 
function Orders() {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='div-1'>
      <div className='div-2'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className='div-3'>
        {products.slice(1, 4).map((itm, index) => {
          return (
            <div key={index} className='div-4'>
              <div className='div-5'>
                <img src={itm.image[0]} className='iimg' alt="" />
                <div className='div-6'>
<p className='p-1'>{itm.name}</p>
<div className='div-7'>
<p className='p-2'>{currency}{itm.price}</p>
<p className='p-3'>Quantity :1</p>
<p className='p-4'>Size M</p>
</div>
<p className='p-5'>Date:<span className='span-1'>27/Aug/2025</span></p>
                </div>
              </div>
              <div className='div-8'>
<div>
  <p className='p-6'></p>
  <p className='p-7'>Ready to ship</p>
</div>
<button className='buuttt'>Track order</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders
