import { createContext, useEffect, useState } from "react";
import { products } from '../assets/frontend_assets/assets';
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'PKR';
  const delivery_fee = '150';
  const [search, setSearch] = useState('');
  const [ShowSearch, setShowSearch] = useState(false);
  const [cartItems, setCartitems] = useState({});

  const addToCart = async (itemId, size) => {
    if(!size){
toast.error("Please select a size");
return  
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
  };

const getCartDta =()=>{
  let totalCount =0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
try {
  if(cartItems[items][item]){
    totalCount += cartItems[items][item]
  }
} catch (error) {
  
}    }
  }
  return totalCount;
}

  const value = {
    products,
    delivery_fee,
    currency,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    cartItems,
    addToCart, // ✅ now included in context
    getCartDta,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
