import { createContext } from "react";
import {products}from '../assets/frontend_assets/assets'
export const  ShopContext = createContext()

const  ShopContextProvider =(props)=>{
    const currency ='PKR'
    const delivery_fee ='150'

    const value ={
products,delivery_fee,currency
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider