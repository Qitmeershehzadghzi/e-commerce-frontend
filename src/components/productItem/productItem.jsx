import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductItem({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
      <Link to={`/product/${id}`} className="block">
        
        {/* Product Image */}
        <div className="product-image w-full h-52 sm:h-60 md:h-64 lg:h-72 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </div>
        
        {/* Product Info */}
        <div className="product-info p-4 sm:p-5 md:p-6 text-center">
          <p className="product-name text-base sm:text-lg md:text-xl font-semibold text-gray-800 truncate">
            {name}
          </p>
          <p className="product-details text-indigo-600 font-bold mt-2 text-sm sm:text-base md:text-lg">
            {currency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
