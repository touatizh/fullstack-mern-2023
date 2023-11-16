import React from "react"
import { Link } from "react-router-dom"

const ListAllProducts = (props) => {

    const {allProducts} = props

    return (
        <div id="displayProducts">
            <h1>All Products</h1>
            {
                allProducts.map((product, index) => (
                    <Link to={`${product._id}`}>{product.title}</Link>
                ))
            }
        </div>
    )
}

export default ListAllProducts