import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../productItem/productItem.jsx';

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [BestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestSellers = products.filter(product => product.bestseller);
    setBestSellers(bestSellers.slice(0, 5));
  }, [products]);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-12 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <Title text1={'Best'} text2={'Sellers'} />
        <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure soluta assumenda!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
        {BestSellers.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white rounded-xl p-4 animate-fadeIn"
          >
            <ProductItem
              name={item.name}
              price={item.price}
              id={item._id}
              image={item.images[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
