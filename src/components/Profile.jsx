import React from 'react'

const Profile = ({user}) => {
  console.log({user});
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.city}</div>
    </div>
  )
}

export default Profile
