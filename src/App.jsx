import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  // const isLoggedIn = true;
  // if(isLoggedIn) {
  //   return (
  //     <>
  //     <Navbar />
  //     <div className='card'>
  //       <img src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png" alt="product-img" width="200px" height="200px" />
  //       <p>This is a shoe</p>
  //       <p>Price: $50</p>
  //     </div>
  //     <Footer />
  //   </>
  //   )
  // }
  // else{
  //   return (
  //     <Login/>
  //   )
  // }
  // const isLoading = false;
  // return (
  //   <>{isLoading ? <p>Loading</p> : <p>Loaded</p>}</>
  // )

  //props
  const user = {
    name: "Alice",
    age: 20,
    city: "Mumbai"
  }

  return (
    <>
    <Profile user={user}/>
    </>
  )
}

export default App
