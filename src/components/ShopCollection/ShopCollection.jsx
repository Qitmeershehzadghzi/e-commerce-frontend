import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem'; // fixed casing
import "./ShopCollection.css";

function ShopCollection() {
  const { products } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]); // camelCase

  useEffect(() => {
    if (products.length > 0) {
      setLatestCollection(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className='collection'>
      <div className='sec-div'>
        <Title text1={'Latest'} text2={'Collection'} />
        <p className='para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, veniam.
        </p>
      </div>

      <div className='collect'>
        {latestCollection.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopCollection;
