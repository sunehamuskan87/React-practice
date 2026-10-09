import React, { useState } from 'react'
import Newsletter from './Newsletter';
import JobApplication from './JobApplication';

const App = () => {
    // const [email, setEmail] = useState("");
    // function displayResult (event) {
    //     event.preventDefault();
    //     console.log(`Subscribed: ${email}`)
    //     input.value = "";
    // }
  return (
    <div>
      {/* <form action="" onSubmit={displayResult}>
        <label htmlFor="">Email: </label>
        <input type="email" placeholder='Enter you email' value={email} onChange={(event) => {
            setEmail(event.target.value);
        }}/>
        <button type="submit">Submit</button>
        
      </form> */}
      {/* <Newsletter /> */}
      <JobApplication />
    </div>
  )
}

export default App
