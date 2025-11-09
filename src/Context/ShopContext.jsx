import React, { createContext, useState } from 'react'
import all_product from '../Components/assets/all_product'
import Product from '../Pages/product';



export let ShopContext = createContext(null);
let getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
}


const ShopContextProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState(getDefaultCart())

  let addToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    console.log(addToCart);
  }
  let removeToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  }

  let getToCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((Product) => Product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;

      }
    }
    return totalAmount;
  }
  
  let getToCartCount = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  console.log(cartItems);
  let contextValue = { all_product, cartItems, addToCart, removeToCart, getToCartAmount, getToCartCount }





  return (
    <ShopContext.Provider value={contextValue}>
      {children}


    </ShopContext.Provider>
  )
}

export default ShopContextProvider;