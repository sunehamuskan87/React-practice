import React from 'react'
import { useState } from 'react';
import SearchButton from './component/SearchButton';
import { useCallback } from 'react';
import AddToCart from './component/AddToCart';

const App = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  function showMessage(){
    setCount(count+1);
    console.log("Count increased to:", count);
  }

  const handleSearch = useCallback(()=>{
    console.log("Search for: ", search);
  },[search])


  const handleAdd = useCallback((productName)=>{
    console.log(`${productName} added to Cart`)
  },[])

  return (
    <div>Count
      <p>{count}</p>
      <button onClick={showMessage}>Increase</button>
      {/* <button onClick={showMessage}>Show Message</button> */}

      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <SearchButton onSearch={handleSearch}/>
      <AddToCart onAddToCart={handleAdd}/>
    </div>
  )
}

export default App
