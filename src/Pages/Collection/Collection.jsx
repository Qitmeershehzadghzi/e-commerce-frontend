import React, { useContext, useEffect, useState } from 'react';
import './Collection.css';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/frontend_assets/assets';
import Title from '../../components/Title/Title';
import ProductItem from '../../components/productItem/productItem';

function Collection() {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Category toggle
  const toggleFilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // SubCategory toggle
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Apply Filter
  const applyFilter = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productCopy);
  };

  // Sort Products
  const sortProduct = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setFilterProduct(fpCopy);
  };

  // Run sorting when sortType changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // Run filter when category/subCategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products]);

  return (
    <div className='collection'>
      {/* Filter Button for small screen */}
      <div className='sec-div'>
        <p onClick={() => setShowFilter(!showFilter)} className='pr-1'>
          Filter
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>
      </div>

      {/* Filter Options */}
      <div className={`div-2 ${showFilter ? 'show' : ''}`}>
        <p className='pr-2'>Categories</p>
        <div className='catogries'>
          <p className='cat'><input type="checkbox" value="Men" onChange={toggleFilter} /> Men</p>
          <p className='cat'><input type="checkbox" value="Women" onChange={toggleFilter} /> Women</p>
          <p className='cat'><input type="checkbox" value="Kids" onChange={toggleFilter} /> Kids</p>
        </div>

        <p className='pr-2'>Type</p>
        <div className='catogries'>
          <p className='cat'><input type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear</p>
          <p className='cat'><input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear</p>
          <p className='cat'><input type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear</p>
        </div>
      </div>

      {/* Products Section */}
      <div className='dv'>
        <div className='dv-1'>
          <Title text1={'All'} text2={'Collections'} />
          <select onChange={(e) => setSortType(e.target.value)} className='sl'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        <div className='dv-2'>
          {filterProduct.map((item, index) => (
            <ProductItem
              key={item._id || index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
