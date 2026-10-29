import React, { useContext } from 'react'
import { ProductsContext } from '../ProductsContext'
import ProductsCard from './ProductsCard'

const Products = () => {
  const {products} = useContext(ProductsContext)
  console.log("products fetched in product page",products)

  return (
     <div className='container'>
      {products.map((product)=>(
        <ProductsCard key={product.id} product={product}/>
        // <div key={product.id}>
        //   <h3>{product.title}</h3>
        //   <p>{product.price}</p>
        // </div>
      ))}
    </div>
  )
}

export default Products
