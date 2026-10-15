import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
import Navbar from './components/Navbar'
import './App.css'
import CourseDetails from './components/CourseDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/courses/:courseId' element={<CourseDetails />} />
      </Routes>
    </div>
  )
}

export default App
