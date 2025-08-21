import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../Title/Title';
import ProductItem from '../productItem/productItem';
import "./ShopCollection.css";

function ShopCollection() {
  const { products } = useContext(ShopContext);
  const [LatestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    setLatestCollection(products.slice(0, 10));
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
        {LatestCollection.map((item, index) => (
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
