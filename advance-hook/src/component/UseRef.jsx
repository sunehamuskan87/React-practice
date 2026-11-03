import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  
  useEffect(()=>{
    renderCount.current +=1
  })
  return (
    <div> 
        <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  )
}

export default UseRef
