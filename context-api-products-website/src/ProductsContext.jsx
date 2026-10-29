import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        console.log(products);
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchProducts();
  },[])

  return (
    <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
  )
}

