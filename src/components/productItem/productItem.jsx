import React, { useContext } from 'react';
// import "./productItem.css";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductItem({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="product-card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <Link to={`/product/${id}`} className="product-item block">
        <div className="product-image w-full h-64 overflow-hidden">
          <img src={image} alt={name} className="image w-full h-full object-cover" />
        </div>
        <div className="product-info p-4 text-center">
          <p className="product-name text-lg font-semibold text-gray-800">{name}</p>
          <p className="product-details text-indigo-600 font-bold mt-2">
            {currency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
