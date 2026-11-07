import React from 'react'

const PracticePage = () => {
  return (
    <div>PracticePage
        {/* Background-color and hover*/}
        <div className='bg-blue-400 hover:bg-blue-700'>Hello, Suneha</div>
        <div className='bg-red-500'>Hello, Muskan</div>
        <div className='bg-green-600'>Hello, Majid</div>

        {/* Text color*/}
        <div className='text-blue-500'>Hello, Suneha</div>
        <div className='text-red-500'>Hello, Muskan</div>
        <div className='text-green-600'>Hello, Majid</div>

        {/* Text color and font-size*/}
        <div className='text-blue-500 text-sm'>Small Text</div>
        <div className='text-red-500 text-base'>Normal Text</div>
        <div className='text-green-600 text-xl'>Large text</div>
        <div className='text-pink-600 text-3xl'>Very Large text</div>
    </div>
  )
}

export default PracticePage