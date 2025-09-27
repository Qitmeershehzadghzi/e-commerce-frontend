import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../../components/Title/Title';
import { assets } from '../../assets/frontend_assets/assets';
import CartTotal from '../../components/CartTotal/CartTotal';

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const dt = [];
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const data = products.find((product) => product._id === item._id);
            if (!data) return null;

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-500"
              >
                {/* Product Image */}
                <div className="w-28 h-28 flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    src={data.images?.[0]}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 sm:ml-6 text-center sm:text-left space-y-2">
                  <p className="text-lg font-semibold text-gray-800">{data.name}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        e.target.value === '0'
                          ? null
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      className="w-16 p-2 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <p className="text-md font-medium text-gray-700">
                      {currency} {data.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <div className="mt-4 sm:mt-0 sm:ml-6">
                  <img
                    onClick={() => updateQuantity(item._id, item.size)}
                    src={assets.bin_icon}
                    alt="Remove"
                    className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600 text-lg">Your cart is empty</p>
        )}
      </div>

      {/* Cart Total Section */}
      {cartData.length > 0 && (
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <CartTotal />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-500"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
