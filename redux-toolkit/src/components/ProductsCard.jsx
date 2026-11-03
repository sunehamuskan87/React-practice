import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../features/cart/cartSlice';

const ProductsCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default ProductsCard