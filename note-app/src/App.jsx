import React from 'react'
import {Routes, Route} from 'react-router'
import Notes from './components/Notes'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ViewNotes from './components/ViewNotes'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className={`${theme === 'light' ? 'bg-orange-50' : 'bg-gray-800'} w-screen h-screen`}>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/notes/:id" element={<ViewNotes />} />
      </Routes>

    </div>
  )
}

export default App