import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// pehle localhost tha
// const BASE_URL = "http://localhost:4000";
// 
// ab backend live URL set karo
const BASE_URL = "https://e-commerce-backendd-4wbh.vercel.app/";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "PKR";
  const delivery_fee = 150;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [ShowSearch, setShowSearch] = useState(false);
  const [cartItems, setCartitems] = useState({});
  const [products, setproducts] = useState([]);
  const [token, settoken] = useState("");
  const navigate = useNavigate();

  // ➕ Add item to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    const cartDat = structuredClone(cartItems);

    if (cartDat[itemId]) {
      if (cartDat[itemId][size]) {
        cartDat[itemId][size] += 1;
      } else {
        cartDat[itemId][size] = 1;
      }
    } else {
      cartDat[itemId] = {};
      cartDat[itemId][size] = 1;
    }

    setCartitems(cartDat);
    if (token) {
      try {
        axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // ➕ Get total items in cart
  const getCartDta = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) totalCount += cartItems[items][item];
        } catch (error) {}
      }
    }
    return totalCount;
  };

  // ➕ Update item quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let update = structuredClone(cartItems);
    update[itemId][size] = quantity;
    setCartitems(update);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // ➕ Get total cart amount
  const getCardAmount = () => {
    let TotlaAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((p) => p._id === items);
      if (!itemInfo) continue;
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            TotlaAmount += cartItems[items][item] * itemInfo.price;
          }
        } catch (error) {}
      }
    }
    return TotlaAmount;
  };

  // ✅ Fetch products from backend
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setproducts(response.data.productss); // ✅ spelling fix
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ✅ Fetch user cart
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setCartitems(response.data.cartData); // ✅ spelling fix
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    delivery_fee,
    currency,
    getCardAmount,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    updateQuantity,
    navigate,
    backendUrl,
    settoken,
    token,
    cartItems,
    setCartitems,
    addToCart,
    getCartDta,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
