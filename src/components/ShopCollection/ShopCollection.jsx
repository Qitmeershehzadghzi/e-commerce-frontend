import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../productItem';

function ShopCollection() {
  const { products } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setLatestCollection(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="collection max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Title */}
      <div className="sec-div text-center mb-10">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="para text-gray-500 text-sm sm:text-base md:text-lg mt-2 max-w-2xl mx-auto">
          Discover our latest arrivals crafted with love and top-notch quality.
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="collect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 
        transition-all duration-500 ease-in-out"
      >
        {latestCollection.map((item, index) => (
          <div
            key={index}
            className="animate-fadeInUp"
          >
            <ProductItem
              id={item._id}
              image={item.images[0]}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCollection;
