import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/frontend_assets/assets';
import Title from '../../components/Title/Title';
import ProductItem from '../../components/productItem/ProductItem';

function Collection() {
  const { products, search, ShowSearch } = useContext(ShopContext);
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
    if (ShowSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
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
  }, [category, subCategory, products, search, ShowSearch]);

  useEffect(() => {
    applySort();
  }, [sortType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Title text1="All" text2="Collections" />
        <img
          src={assets.dropdown_icon}
          className={`sm:hidden w-9 h-9 p-2 rounded-full bg-gray-100 cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 ${
            showFilter ? 'rotate-90' : ''
          }`}
          onClick={() => setShowFilter(!showFilter)}
          alt="toggle filter"
        />
      </div>

      {/* Content Layout */}
      <div className="flex flex-col sm:flex-row gap-8">
        {/* LEFT FILTERS */}
        <div
          className={`w-full sm:w-1/4 bg-white border rounded-xl shadow-lg p-6 space-y-6 transform transition-all duration-500 ${
            showFilter ? 'block' : 'hidden'
          } sm:block`}
        >
          <p className="text-lg font-semibold text-gray-800 border-b pb-2">
            Categories
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="Men" onChange={toggleCategory} />
              Men
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="Women" onChange={toggleCategory} />
              Women
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="Kids" onChange={toggleCategory} />
              Kids
            </label>
          </div>

          <p className="text-lg font-semibold text-gray-800 border-b pb-2">
            Type
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex justify-end mb-6">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <div
                  key={index}
                  className="transform transition duration-500 hover:scale-105"
                >
                  <ProductItem
                    id={item._id}
                    name={item.name}
                    image={item.images[0]}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
