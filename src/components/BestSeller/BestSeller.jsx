import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import "./BestSeller.css";
import ProductItem from '../productItem/productItem';

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [BestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestSellers = products.filter(product => product.bestseller);
    setBestSellers(bestSellers.slice(0, 5)); 
  }, [products]); // dependency added

  return (
    <div className='main-container'>
      <div className='sec-div'>
        <Title text1={'Best'} text2={'Sellers'} />
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure soluta assumenda!
        </p>
      </div>

      <div className='collect'>
        {BestSellers.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            price={item.price}
            id={item._id}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
