import React from 'react'
import {NavLink} from 'react-router'
import {Moon} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-options">
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
        </div>
        <div className='themeIcon'>
            <Moon />
        </div>
    </div>
    

  )
}

export default Navbar
