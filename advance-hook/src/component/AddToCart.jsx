import React, { memo } from 'react'


const AddToCart = memo (({onAddToCart}) => {
    const products = [
        { id: 1, name: "Phone", price: 20000 },
        { id: 2, name: "Book", price: 300 },
        { id: 3, name: "Shampoo", price: 1000 }
    ]
    console.log("Add to cart page rendered")

    return (
        <>
            <div>
                {products.map((product) => (
                    <div>
                        <h2 key={product.id}>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={()=>{
                            onAddToCart(product.name)
                        }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>

    )
})

export default AddToCart
