import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  const products = [
    {id: 1, name: "Phone", price: 20000},
    {id: 2, name: "Watch", price: 7000},
    {id: 3, name: "TV", price: 50000}
  ]
  return (
    <div>Products
      {products.map((product)=> (
        <ProductsCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Products
