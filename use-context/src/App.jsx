import React from 'react'
import { CartProvider } from './CartContext'
import Navbar from './components/Navbar'
import Products from './components/ProductCard'
import CartPage from './components/CartPage'


const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Products />
      <CartPage />
    </CartProvider>
    
  )
}

export default App
