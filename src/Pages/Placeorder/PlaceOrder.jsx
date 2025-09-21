import React, { useContext, useState } from 'react'
import Title from '../../components/Title/Title'
import CartTotal from '../../components/CartTotal/CartTotal'
import { assets } from '../../assets/frontend_assets/assets'
import './Placeorder.css';
import { ShopContext } from '../../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

function PlaceOrder() {
  const { navigate, backendUrl, token, cartItems, setCartitems, getCardAmount, delivery_fee } = useContext(ShopContext)
  const [method, setMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    City: '',
    State: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for (let productId in cartItems) {
        for (let size in cartItems[productId]) {
          if (cartItems[productId][size]) {
            orderItems.push({
              productId: productId,
              size: size,
              quantity: cartItems[productId][size]
            })
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCardAmount() + delivery_fee,
        paymentMethod: method
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(
            backendUrl + '/order/place',
            orderData,
            { headers: { token } }
          )
          if (response.data.success) {
            setCartitems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break

        default:
          break
      }

    } catch (error) {
      console.error("❌ Order place error:", error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='div-1'>
      {/* Left side */}
      <div className='div-2'>
        <div className='div-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='div-4'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder="FIRST NAME" className="inp" />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder="LAST NAME" className="inp-1" />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder="EMAIL ADDRESS" className="inp-2" />
        <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder="STREET" className="inp-3" />
        <div className='div-5'>
          <input required onChange={onChangeHandler} name='City' value={formData.City} type="text" placeholder="CITY" className="inp-4" />
          <input required onChange={onChangeHandler} name='State' value={formData.State} type="text" placeholder="STATE" className="inp-5" />
        </div>
        <div className='div-6'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder="ZIPCODE" className="inp-6" />
          <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder="COUNTRY" className="inp-7" />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder="PHONE NUMBER" className="inp-6" />
      </div>

      {/* Right side */}
      <div className='div-7'>
        <div className='div-8'>
          <CartTotal />
        </div>
        <div className='div-9'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='div-10'>
            <div onClick={() => setMethod('stripe')} className='div-11'>
              <p className={`p-1 ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='img-1' alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='div-11'>
              <p className={`p-1 ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='img-1' alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='div-11'>
              <p className={`p-1 ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='p-2'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='div-13'>
            <button type='submit' className='bbbut'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder
