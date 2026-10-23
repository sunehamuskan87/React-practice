import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Navbar = () => {
  const {cart} = useContext(CartContext);
  return (
    <div>
        NavBar
        <p>Cart Items : {cart.length}</p>
    </div>
  )
}

export default Navbar
