import { createContext, useEffect, useState } from "react";
import { products } from '../assets/frontend_assets/assets';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'PKR';
  const delivery_fee = 150;
  const [search, setSearch] = useState('');
  const [ShowSearch, setShowSearch] = useState(false);
  const [cartItems, setCartitems] = useState({});
  const navigate = useNavigate();

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
const updateQuantity =async(itemId,size,quantity)=>{
let update =structuredClone(cartItems);
update[itemId][size] =quantity;
setCartitems(update);
}
const getCardAmount =()=>{
  let TotlaAmount =0
  for(const items in cartItems){
  let itemInfo = products.find(product=>product._id === items)
  for (const item in cartItems[items]){
    try {
      if(cartItems[items][item]>0){
TotlaAmount += cartItems[items][item] * itemInfo.price
      }
    } catch (error) {
      
    }
  }
  }
  return TotlaAmount;
}

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
