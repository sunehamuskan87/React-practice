import React from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { increment } from './features/counterSlice';
import { decrement } from './features/counterSlice';
import { reset } from './features/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>

      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      <button onClick={()=>dispatch(reset())}>Reset</button>

    </div>
  )
}

export default App
