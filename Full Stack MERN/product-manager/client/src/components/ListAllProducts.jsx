import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ListAllProducts = (props) => {

    const {allProducts, onDelete} = props

    const handleDelete = (id, index) => {
        const confirmDelete = window.confirm("Do you really want to delete this product?")

        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/products/delete/${id}`)
                .then(() => onDelete(index))
                .catch(e => console.log(e))
        }
    }

    return (
        <div id="displayProducts">
            <h1>All Products</h1>
            {
                allProducts.map((product, index) => (
                    <div key={index}>
                        <Link to={`${product._id}`}>{product.title}</Link>
                        <button type="button" onClick={ () => handleDelete(product._id, index) }>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ListAllProducts