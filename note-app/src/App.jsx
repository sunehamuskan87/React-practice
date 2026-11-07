import React from 'react'
import {Routes, Route} from 'react-router'
import Notes from './components/Notes'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ViewNotes from './components/ViewNotes'

const App = () => {
  return (
    <div className='bg-orange-50 w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<ViewNotes />} />
      </Routes>

    </div>
  )
}

export default App