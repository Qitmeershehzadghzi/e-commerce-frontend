import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Verify = () => {
  const { navigate, token, setCartitems, backendUrl, userId } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId, userId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartitems({});
        navigate('/orders');
      } else {
        navigate('/cart');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center 
                      max-w-md w-full animate-fadeIn">
        
        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center tracking-wide">
          Verifying Your Payment
        </h2>
        <p className="text-gray-500 text-center mt-3 text-sm md:text-base">
          Please wait while we confirm your transaction. 
        </p>

        {/* Progress bar animation */}
        <div className="w-full mt-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-2 bg-indigo-600 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
