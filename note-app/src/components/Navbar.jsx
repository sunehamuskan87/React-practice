import React from 'react'
import { NavLink } from 'react-router'
import {Moon, BookHeart, Sun} from 'lucide-react'

const Navbar = ({theme, toggleTheme}) => {

  return (
    <div className={`${theme === 'light' ? 'bg-orange-50 text-gray-800' : 'bg-gray-800 text-white'} flex justify-between items-center border-b border-neutral-300 shadow-sm px-18 h-15`}>
        <h1 className='flex items-center gap-1 font-serif font-bold text-2xl'><BookHeart className='text-orange-500'/>Evernote</h1>
        <div className='flex gap-8 h-full'>
          <NavLink to='/'
            className={({isActive}) => 
            `flex items-center font-semibold border-b-3 px-4 ${isActive? 'border-orange-500' : 'text-gray-500 border-transparent hover:border-orange-500'} transition-colors duration-300`}>
              Write
          </NavLink>
          <NavLink to='/notes'
           className={({isActive}) =>
            `flex items-center font-semibold border-b-3 px-4 ${isActive? 'border-orange-500' : 'text-gray-500 border-transparent hover:border-orange-500'} transition-colors duration-300`}>
            My Notes
          </NavLink>
        </div>
        <button onClick={toggleTheme}>{theme === 'light' ? <Moon /> : <Sun />}</button>

    </div>
  )
}

export default Navbar