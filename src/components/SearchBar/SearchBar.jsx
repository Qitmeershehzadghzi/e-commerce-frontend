import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './SearchBar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/Collection') ) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, ShowSearch]) // 👈 ShowSearch bhi add kiya

  return ShowSearch || visible ? (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder='search'
          className='input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} className='image' alt="search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className='2nd-image'
        alt="close"
      />
    </div>
  ) : null
}

export default SearchBar
