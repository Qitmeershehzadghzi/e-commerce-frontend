import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartDta, navigate, token, settoken, setCartitems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    settoken("");
    setCartitems({});
  };

  return (
    <div className="navbar-container w-full bg-white shadow-md fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 md:py-4">
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt="logo"
          className="navbar-logo w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Links */}
      <ul className="navbar-links hidden md:flex gap-6 lg:gap-10">
        {["Home", "Collection", "About", "Contact"].map((text, idx) => (
          <NavLink
            key={idx}
            to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
            className="flex flex-col items-center text-gray-700 font-medium hover:text-blue-600 transition"
          >
            {({ isActive }) => (
              <>
                <p className="navbar-text">{text}</p>
                <div
                  className={`h-[2px] w-6 rounded bg-blue-600 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="navbar-icons flex items-center gap-4 sm:gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          onClick={() => setShowSearch(true)}
          alt="search"
          className="w-6 cursor-pointer hover:scale-110 transition-transform"
        />

        {/* Profile */}
        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="profile"
            className="w-7 cursor-pointer hover:scale-110 transition"
          />
          {token && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 space-y-2">
              <p onClick={() => navigate("/orders")} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Orders
              </p>
              <p onClick={logout} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="w-7 cursor-pointer hover:scale-110 transition"
          />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
            {getCartDta()}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-7 cursor-pointer md:hidden hover:scale-110 transition"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center gap-3 p-4 border-b">
          <img
            onClick={() => setVisible(false)}
            src={assets.dropdown_icon}
            alt="back"
            className="w-6 cursor-pointer hover:rotate-180 transition-transform duration-300"
          />
          <p className="text-gray-700 font-semibold">Back</p>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
          {["Home", "Collection", "About", "Contact"].map((text, idx) => (
            <li key={idx}>
              <Link
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                onClick={() => setVisible(false)}
                className="block hover:text-blue-600 hover:translate-x-1 transition-all duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
