import React, { useContext } from 'react';
import "./productItem.css";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductItem({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link to={`/product/${id}`} className='product-item'>
        <div className='product-image'>
          <img src={image} alt={name} className='image' />
          <p className='product-name'>{name}</p>
          <p className='product-details'>
            {currency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
