import React from 'react'
import ProductCard from './ProductCard'


const products = () => {
  const items = [
    {id: 1, name: "Phone", price: 20000},
    {id: 2, name: "Fan", price: 5000},
    {id: 3, name: "Table", price: 8000}
  ]
  return (
    <div>
      {items.map((product) => (
         <ProductCard key={product.id} product={product} />
      ))}

    </div>
  )
}

export default products
