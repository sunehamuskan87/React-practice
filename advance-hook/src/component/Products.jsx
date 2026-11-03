import React, { useMemo, useState } from 'react'

const Products = () => {
    const [search, setSearch] = useState('');
    const products = [
        { id: 1, name: "Phone", price: 20000 },
        { id: 2, name: "Book", price: 300 },
        { id: 3, name: "Book Stand", price: 300 },
        { id: 4, name: "Shampoo", price: 1000 }
    ]

    const filteredProducts = useMemo(()=>{
        console.log("Memo used..")
        return products.filter(product => product.name.includes(search));
    },[search])

  return (
    <div>
      <input type="text" placeholder='Search product' value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredProducts.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default Products
