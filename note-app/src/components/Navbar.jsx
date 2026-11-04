import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <NavLink to='/' className={({isActive}) => isActive? 'active' : ''}>Home</NavLink>
        <NavLink to='/notes' className={({isActive}) => isActive? 'active' : ''}>Notes</NavLink>

    </div>
  )
}

export default Navbar