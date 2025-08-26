import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './CartTotal.css'
import Title from '../Title/Title'

function CartTotal() {
  const { currency, delivery_fee, getCardAmount, getCartDta } = useContext(ShopContext)

  const subtotal = getCardAmount()
  const hasItems = getCartDta() > 0   // check cart items

  const total = hasItems ? subtotal + Number(delivery_fee) : 0

  return (
    <div className='cart-total'>
      <div className='cart-total-div'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='cart-total-div-2'>
        {/* Subtotal */}
        <div className='cart-total-div-3'>
          <p>SubTotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>
        <hr />

        {/* Shipping fee sirf tab show hogi jab cart me items hon */}
        {hasItems && (
          <>
            <div className='cart-total-div-4'>
              <p>Shipping fee</p>
              <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
          </>
        )}

        {/* Total */}
        <div className='cart-total-div-5'>
          <b>TOTAL</b>
          <b>{currency}{total}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
