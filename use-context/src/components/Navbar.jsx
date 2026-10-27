import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
// import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  // const {handleClick} = useContext(ThemeContext)

  return (
    <div>
        <h2>NavBar</h2>
        {/* <button onClick={handleClick}>Change Theme</button> */}
        <p>Cart Items : {cart.length}</p>
    </div>
  )
}

export default Navbar
