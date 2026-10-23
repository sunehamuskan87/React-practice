import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const CartPage = () => {
  const {cart} = useContext(CartContext);

  return (
    <div>
      <h3>Your Cart</h3>

      {cart.length === 0 ? (<p>Your Cart is Empty</p>) : (
        cart.map((product) => (
            <p>{product.name} - {product.price}</p>
        ))
      )}
    </div>
  )
}

export default CartPage
