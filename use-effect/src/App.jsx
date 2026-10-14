import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState("");
  useEffect(()=>{
    console.log(`Search executed: ${search}`)
  },[search])
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Search' value={search} onChange={(event) => {
          setSearch(event.target.value);
        }} />

      </form>
    </div>
  )
}

export default App
