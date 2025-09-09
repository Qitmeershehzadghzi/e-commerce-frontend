import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem'; // fixed casing
// import "./ShopCollection.css";

function ShopCollection() {
  const { products } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]); // camelCase

  useEffect(() => {
    if (products.length > 0) {
      setLatestCollection(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className='collection max-w-7xl mx-auto px-6 py-12'>
      <div className='sec-div text-center mb-8'>
        <Title text1={'Latest'} text2={'Collection'} />
        <p className='para text-gray-500 text-lg mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, veniam.
        </p>
      </div>

      <div className='collect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {latestCollection.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.images[0]}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopCollection;
