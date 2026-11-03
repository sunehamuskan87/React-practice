import React from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { increment } from './features/counter/counterSlice';
import { incrementbyValue} from './features/counter/counterSlice'
import { decrement } from './features/counter/counterSlice';
import { reset } from './features/counter/counterSlice';
import Products from './components/Products';
import {removeFromCart} from './features/cart/cartSlice'


const App = () => {
  const count = useSelector((state) => state.counter.count);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>

      <button onClick={()=>dispatch(incrementbyValue(5))}>Increment by 5</button>

      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      <button onClick={()=>dispatch(reset())}>Reset</button>

      <Products />
      <h2>Cart Details: </h2>
      {cartItems.map((item, index)=>(
        <div key={`${item.id}-${index}`}>
          <p>{item.name} - {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={()=>dispatch(removeFromCart(item))}>Remove Product</button>
         
        </div>
      ))}
    </div>
  )
}

export default App
