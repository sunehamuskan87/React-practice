import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Navbar from './components/Navbar'
import { ProductsProvider } from './ProductsContext'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <ProductsProvider>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </ProductsProvider>
    
  )
}

export default App
