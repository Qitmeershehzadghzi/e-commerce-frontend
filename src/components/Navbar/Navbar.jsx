import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch ,getCartDta,navigate,token,settoken,setCartitems} = useContext(ShopContext); // ✅ corrected
const logout =()=>{
  localStorage.removeItem('token')
  navigate('/login')
  settoken('')
  setCartitems({})
}
  return (
    <div className="navbar-container w-full bg-white shadow-md fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="navbar-logo w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
      </Link>

      {/* Links */}
      <ul className="navbar-links hidden md:flex gap-8">
        <NavLink to="/" className="navbar-link flex flex-col items-center text-gray-700 font-medium hover:text-blue-600 transition">
          {({ isActive }) => (
            <>
              <p className="navbar-text">{'Home'}</p>
              <div className={`navbar-underline h-[2px] w-6 rounded bg-blue-600 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="navbar-link flex flex-col items-center text-gray-700 font-medium hover:text-blue-600 transition">
          {({ isActive }) => (
            <>
              <p className="navbar-text">{'Collection'}</p>
              <div className={`navbar-underline h-[2px] w-6 rounded bg-blue-600 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="navbar-link flex flex-col items-center text-gray-700 font-medium hover:text-blue-600 transition">
          {({ isActive }) => (
            <>
              <p className="navbar-text">{'About'}</p>
              <div className={`navbar-underline h-[2px] w-6 rounded bg-blue-600 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="navbar-link flex flex-col items-center text-gray-700 font-medium hover:text-blue-600 transition">
          {({ isActive }) => (
            <>
              <p className="navbar-text">{'Contact'}</p>
              <div className={`navbar-underline h-[2px] w-6 rounded bg-blue-600 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            </>
          )}
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="navbar-icons flex items-center gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          onClick={() => setShowSearch(true)} // ✅ corrected
          alt="search"
          className="navbar-search w-6 cursor-pointer hover:scale-110 transition-transform"
        />

        {/* Profile */}
        <div className="navbar-profile relative group">
            <img
            onClick={()=>token ? null : navigate('/login')}
              src={assets.profile_icon}
              alt="profile"
              className="profile-icon w-7 cursor-pointer hover:scale-110 transition"
            />
       {/* drop down */}
       {
        token &&    <div className="profile-dropdown absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition p-3">
            <p className="dropdown-item text-gray-700 hover:text-blue-600 cursor-pointer">My Profile</p>
            <p onClick={()=>navigate('/orders')} className="dropdown-item text-gray-700 hover:text-blue-600 cursor-pointer">Orders</p>
            <p onClick={logout} className="dropdown-item text-gray-700 hover:text-blue-600 cursor-pointer">Logout</p>
          </div>
       }
        </div>

        {/* Cart */}
        <Link to="/cart" className="navbar-cart-link relative">
          <img src={assets.cart_icon} alt="cart" className="navbar-cart w-7 cursor-pointer hover:scale-110 transition" />
          <span className="cart-count absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {getCartDta()}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="navbar-menu w-7 cursor-pointer md:hidden hover:scale-110 transition"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform ${visible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="mobile-header flex items-center gap-3 p-4 border-b">
          <img
            onClick={() => setVisible(false)}
            src={assets.dropdown_icon}
            alt="back"
            className="w-6 cursor-pointer"
          />
          <p className="text-gray-700 font-semibold">Back</p>
        </div>
        <ul className="mobile-links flex flex-col gap-4 p-6 text-gray-700 font-medium">
          <li>
            <Link to="/" onClick={() => setVisible(false)} className="hover:text-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/collection" onClick={() => setVisible(false)} className="hover:text-blue-600 transition">Collection</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setVisible(false)} className="hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setVisible(false)} className="hover:text-blue-600 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
