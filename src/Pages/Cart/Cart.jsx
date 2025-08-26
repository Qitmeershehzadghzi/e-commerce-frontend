import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../../components/Title/Title';
import './Cart.css';

function Cart() {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const dt = [];

    // Correct iteration through cartItems structure
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          dt.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }

    setCartData(dt);
  }, [cartItems]);

  return (
    <div className='div-1'>
      <div className='div-2'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div className='div-3'>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const data = products.find((product) => product._id === item._id);
            if (!data) return alert('data is not defined'); // optional safety to avoid error if product not found
            
            return (
              <div className='div-4' key={index}>
                <div className='div-5'>
                  <img src={data.image[0]} className='image' alt={data.name} />
                </div>
                <p className='pppp'>{data.name}</p>
                <p className='pppp'>Size: {item.size}</p>
                <p className='pppp'>Qty: {item.quantity}</p>
                <p className='pppp'>Price: {currency} {data.price * item.quantity}</p>
              </div>
            );
          })
        ) : (
          <p className='empty-cart'>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;