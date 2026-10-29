import React, { useContext } from 'react'
// import { useNavigate } from 'react-router';
// import {useParams } from 'react-router'
import { ProductsContext } from '../ProductsContext';
import { useParams } from 'react-router';

const ProductDetails = () => {
    // const navigate = useNavigate();
    const {id} = useParams();
    const {products} = useContext(ProductsContext)
    console.log(products)
    // const product = products[id-1]
    const product = products.find(item => item.id === Number(id))
    console.log(id);
    console.log(product);


    return (
        <div className="">
            
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <p>Ratings: ⭐{product.rating}</p>
            {/* <button onClick={
                navigate('./products')
            }>Back To Products</button> */}
        </div>
    )
}

export default ProductDetails
