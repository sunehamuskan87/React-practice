import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const ProductDetailsContext = createContext();

export const ProductDetailsProvider = ({children}) => {
  const [product, setProduct] = useState({});

  useEffect(()=>{
    async function fetchProduct() {
        try {
            const res = await fetch(`https://dummyjson.com/products/${product.id}`);
            const data = await res.json();
            setProduct(data);
            console.log(product);
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchProduct();
  },[])

  return (
    <ProductDetailsContext.Provider value={product}>{children}</ProductDetailsContext.Provider> 
  )
}

