import React, { useContext } from 'react'
import { CartProvider } from './CartContext'
import Navbar from './components/Navbar'
import Products from './components/Products'
import CartPage from './components/CartPage'
// import {ThemeContext, ThemeProvider } from './ThemeContext'


const App = () => {
  // const {theme} = useContext(ThemeContext);
  return (
    <CartProvider>
      <Navbar />
      <Products />
      <CartPage />
    </CartProvider>


    // <div style={{backgroundColor: theme === "light" ? "lightblue" : "darkblue"}}>
    //   <Navbar />
    //   <h1>Theme </h1>
    //   <p>Change Theme</p>
    // </div>
    
    
  )
}

export default App
