import React, { useContext, useState, useEffect } from 'react';
// import './RelatedProducts.css';
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
      setRelatedProducts(filtered.slice(0,5));
    }
  }, [products]);

  return (
    <>
      <div className='related-products py-12 px-6 bg-gray-100 rounded-2xl shadow-md'>
        <div className='related-products-container text-center mb-8'>
          <Title text1={'Related'} text2={'Products'} />
        </div>
        <div className='related-products-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {relatedProducts.map((item, index) => {
            return (
              <ProductItem 
                key={index} 
                name={item.name} 
                price={item.price} 
                image={item.images[0]} 
                id={item._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;
