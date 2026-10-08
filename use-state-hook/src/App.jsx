import React from 'react'
// import { useState } from 'react'
// import {Moon} from 'lucide-react'
// import {Sun} from 'lucide-react'
import Todo from './components/Todo'

const App = () => {
  // const [darkMode, setTheme] = useState(false);
  return (
    <>
    {/* <h1>{darkMode? "DarkMode" : "LightMode"}</h1>
    <button onClick={()=>{
      setTheme(!darkMode)
    }}>{darkMode? <Sun /> : <Moon /> }</button> */}
    
    <Todo />
    </>
  )
}

export default App
