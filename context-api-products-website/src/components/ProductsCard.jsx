import React from 'react'
import { Link } from 'react-router'

const ProductsCard = ({ product }) => {

    return (
        <div className="card">
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <p>Ratings: ⭐{product.rating}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    )
}

export default ProductsCard
