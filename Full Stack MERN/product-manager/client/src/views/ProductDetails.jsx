import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const ProductDetails = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product)
            })
            .catch(e => console.log(e))
    })
    return (
        <div>
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductDetails