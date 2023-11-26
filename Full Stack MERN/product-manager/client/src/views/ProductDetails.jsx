import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import DeleteButton from '../components/DeleteButton'

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

    return (
        <Col xs={6} className="d-flex flex-column mt-5">
            <h5 className="d-flex justify-content-center mb-4">{product.title}</h5>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <Stack direction="horizontal" gap={3} className="d-flex justify-content-center">
                <Button variant="success" onClick={() => navigate(`/edit/${product._id}/`)}>Edit</Button>
                <DeleteButton prodId={id} />
            </Stack>
        </Col>
    )
}

export default ProductDetails