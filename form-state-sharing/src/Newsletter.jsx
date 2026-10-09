import React, { useState } from 'react'

const Newsletter = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function checkPassword (event) {
    event.preventDefault();
    return setMessage(password.length>8 ? "Password length reached" : "Paasword is too short");
  }

  return (
    <div>
      <form action="" onSubmit={checkPassword}>
        <label htmlFor="">Enter Password: </label>
        <input type="text" value={password} onChange={(event) => {
            setPassword(event.target.value);
        }}/>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Newsletter
