import React from 'react'
// import { useState } from 'react'
// import PracticePage from './component/PracticePage'
import ProfileCard from './component/ProfileCard'

// const App = () => {
//   return (
//     <div>
//       <p className='text-lg border-black-500 border-2'>Large Text</p>
//       <button className='border-red-300 border-4'>Click </button>
//     </div>
//   )
// }

// const [darktheme, setTheme] = useState(false)
// const App = () => {
//   return (
//     <>
//     <h1>{darktheme ? "Dark Mode" : "Light Mode"}</h1>
//     <button onclick={()=>{
//       setTheme(!darktheme)
//     }}>Change Theme</button>
//     </>
    
//   )
// }


const App = () => {
  return (
    <div>
      {/* <PracticePage /> */}
      <ProfileCard />
    </div>
  )
}
export default App
