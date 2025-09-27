import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title'

function CartTotal() {
  const { currency, delivery_fee, getCardAmount, getCartDta } = useContext(ShopContext)

  const subtotal = getCardAmount()
  const hasItems = getCartDta() > 0   // check cart items
  const total = hasItems ? subtotal + Number(delivery_fee) : 0

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Heading */}
      <div className="text-center mb-6">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Totals Section */}
      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
          <p>Subtotal</p>
          <p className="font-semibold">{currency}{subtotal}.00</p>
        </div>
        <hr className="border-gray-200" />

        {/* Shipping fee (sirf jab cart me items hon) */}
        {hasItems && (
          <>
            <div className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
              <p>Shipping fee</p>
              <p className="font-semibold">{currency}{delivery_fee}.00</p>
            </div>
            <hr className="border-gray-200" />
          </>
        )}

        {/* Total */}
        <div className="flex justify-between items-center text-gray-900 font-bold text-base sm:text-lg">
          <b>TOTAL</b>
          <b>{currency}{total}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
