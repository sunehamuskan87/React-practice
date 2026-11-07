import React from 'react'

const ProfileCard = () => {
  return (
    <div>
        <div className='bg-blue-100 m-2 rounded-xl text-center p-4'>
            <button className='w-20 h-20 bg-blue-500 text-white text-3xl font-bold mb-2 rounded-full'>A</button>
            <h2 className='text-blue-900 text-2xl font-bold'>Suneha Muskan</h2>
            <p className='text-blue-500 mt-2 text-base'>Software Developer</p>
            <button className='bg-blue-500 text-white font-bold p-3 m-4 rounded-xl'>Contact Me</button>
            <button className="dark:md:hover:bg-fuchsia-600">Save changes</button>
        </div>
    </div>
  )
}

export default ProfileCard