import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

//step 1 : create context
export const CartContext = createContext();

//step 2 : create provider
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) =>{
        [...prevCart, product];
    })
  }
  return (
   <CartContext.Provider value={{cart, addToCart}}> {children} </CartContext.Provider>
  )
}

