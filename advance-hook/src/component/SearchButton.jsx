import React, { memo } from 'react'

const SearchButton = memo(({onSearch}) => {
    console.log("Search button rendered")
  return (
    <div>
      <button onClick={onSearch}>Search</button>
    </div>
  )
})

export default SearchButton
