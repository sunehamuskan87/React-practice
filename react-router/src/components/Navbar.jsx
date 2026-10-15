import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/courses'>Course</Link> */}

      <NavLink to='/' className={({isActive}) => isActive? 'active' : ""}>Home</NavLink>
      <NavLink to='/about' className={({isActive}) => isActive? 'active' : ""}>About</NavLink>
      <NavLink to='/courses' className={({isActive}) => isActive? 'active' : ""}>Course</NavLink>
    </div>
  )
}

export default Navbar
