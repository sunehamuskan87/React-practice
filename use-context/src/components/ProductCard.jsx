import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const ProductCard = ({product}) => {
    console.log(product);
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Product Display here</h2>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
