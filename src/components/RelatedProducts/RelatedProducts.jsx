import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem';

function RelatedProducts({ category, subcategory }) {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(
        (item) => item.category === category && item.subcategory === subcategory
      );
      setRelatedProducts(filtered.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="related-products py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-2xl shadow-lg">
      {/* Title */}
      <div className="text-center mb-10">
        <Title text1={'Related'} text2={'Products'} />
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          You may also like these products
        </p>
      </div>

      {/* Products Grid */}
      <div className="related-products-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {relatedProducts.map((item, index) => (
          <div
            key={index}
            className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 ease-in-out"
          >
            <ProductItem
              name={item.name}
              price={item.price}
              image={item.images[0]}
              id={item._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
