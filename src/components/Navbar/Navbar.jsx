import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar-container">
      {/* Logo */}
     <Link to={'/'}> <img src={assets.logo} alt="logo" className="navbar-logo" /></Link>

      {/* Links */}
      <ul className="navbar-links">
        <NavLink to="/" className="navbar-link">
          {({ isActive }) => (
            <>
              <p className="navbar-text">Home</p>
              <div className={`navbar-underline ${isActive ? "active" : ""}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="navbar-link">
          {({ isActive }) => (
            <>
              <p className="navbar-text">Collection</p>
              <div className={`navbar-underline ${isActive ? "active" : ""}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="navbar-link">
          {({ isActive }) => (
            <>
              <p className="navbar-text">About</p>
              <div className={`navbar-underline ${isActive ? "active" : ""}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="navbar-link">
          {({ isActive }) => (
            <>
              <p className="navbar-text">Contact</p>
              <div className={`navbar-underline ${isActive ? "active" : ""}`} />
            </>
          )}
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="navbar-icons">
        <img src={assets.search_icon} alt="search" className="navbar-search" />

        <div className="navbar-profile">
          <img src={assets.profile_icon} alt="profile" className="profile-icon" />
          <div className="profile-dropdown">
            <p className="dropdown-item">My Profile</p>
            <p className="dropdown-item">Orders</p>
            <p className="dropdown-item">Logout</p>
          </div>
        </div>

        <Link to="/cart" className="navbar-cart-link">
          <img src={assets.cart_icon} alt="cart" className="navbar-cart" />
          <span className="cart-count">0</span>
        </Link>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="navbar-menu"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${visible ? "active" : ""}`}>
        <div className="mobile-header">
          <img
            onClick={() => setVisible(false)}
            src={assets.dropdown_icon}
            alt="back"
          />
          <p>Back</p>
        </div>
        <ul className="mobile-links">
          <li><Link to="/" onClick={() => setVisible(false)}>Home</Link></li>
          <li><Link to="/collection" onClick={() => setVisible(false)}>Collection</Link></li>
          <li><Link to="/about" onClick={() => setVisible(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setVisible(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
