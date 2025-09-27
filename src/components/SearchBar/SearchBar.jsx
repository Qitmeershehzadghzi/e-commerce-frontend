import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
// import './SearchBar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/Collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, ShowSearch])

  return ShowSearch || visible ? (
    <div className="search-bar-container fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl flex items-center justify-between bg-gray-900 px-6 py-4 rounded-2xl shadow-2xl z-50 transition-all duration-500">
      <div className='search-bar flex items-center bg-gray-800 px-4 py-2 rounded-full w-full'>
        <input
          type="text"
          placeholder='Search'
          className='input bg-transparent text-white placeholder-gray-400 outline-none flex-grow px-2'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} className='image w-6 h-6 cursor-pointer' alt="search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className='2nd-image w-6 h-6 ml-4 cursor-pointer hover:rotate-90 transition-transform duration-300'
        alt="close"
      />
    </div>
  ) : null
}

export default SearchBar
