import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product)
            })
            .catch(e => console.log(e))
    })

    const handleDelete = () => {
        const confirmDelete = window.confirm("Do you really want to delete this product?")

        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/products/delete/${id}`)
                .then(() => navigate("/"))
                .catch(e => console.log(e))
        }
    }
    return (
        <div>
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button type="button" onClick={() => navigate(`/edit/${product._id}/`)}>Edit</button>
            <button type="button" onClick={ handleDelete }>Delete</button>
        </div>
    )
}

export default ProductDetails