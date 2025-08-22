import React, { useContext } from 'react';
import "./productItem.css";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductItem({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-item">
        <div className="product-image">
          <img src={image[0]} alt={name} className="image" />
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-details">
            {currency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
