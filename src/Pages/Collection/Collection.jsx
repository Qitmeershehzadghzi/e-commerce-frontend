import React, { useContext, useEffect, useState } from 'react';
// import './Collection.css';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/frontend_assets/assets';
import Title from '../../components/Title/Title';
import ProductItem from '../../components/productItem/ProductItem';

function Collection() {
  const { products,search,ShowSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = [...products];
    if(ShowSearch && search){
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  const applySort = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        setFilterProducts(products);
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, products,search,ShowSearch]);

  useEffect(() => {
    applySort();
  }, [sortType]);

  return (
    <div className="collection-container max-w-7xl mx-auto px-6 py-12">
      <div className="collection-title flex justify-between items-center mb-8">
        <Title text1="All" text2="Collections" />
        <img
          src={assets.dropdown_icon}
          className={`dropdown-icon sm:hidden w-8 h-8 cursor-pointer transform transition-transform ${showFilter ? 'rotate-90' : ''}`}
          onClick={() => setShowFilter(!showFilter)}
          alt="toggle filter"
        />
      </div>

      <div className="collection-content flex gap-8">
        {/* LEFT FILTERS */}
        <div className={`filters w-1/4 bg-gray-50 p-6 rounded-xl shadow space-y-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className="filter-heading text-lg font-semibold text-gray-800">CATEGORIES</p>
          <div className="filter-options space-y-2 text-sm text-gray-600">
            <p><input type="checkbox" value="Men" onChange={toggleCategory} /> Men</p>
            <p><input type="checkbox" value="Women" onChange={toggleCategory} /> Women</p>
            <p><input type="checkbox" value="Kids" onChange={toggleCategory} /> Kids</p>
          </div>

          <p className="filter-heading text-lg font-semibold text-gray-800">TYPE</p>
          <div className="filter-options space-y-2 text-sm text-gray-600">
            <p><input type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear</p>
            <p><input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear</p>
            <p><input type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear</p>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="products-section flex-1">
          <div className="sort-bar flex justify-end mb-6">
            <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-sm">
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filterProducts.length > 0 ? (
              filterProducts.map((item,index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.images[0]}
                  price={item.price}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
