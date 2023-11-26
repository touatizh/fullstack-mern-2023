import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import ProductForm from "./ProductForm"

const EditProduct = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product)
            })
            .catch(e => console.log(e))
    }, [id])

    const initialValues = {
        title: product.title,
        price: product.price,
        description: product.description
    }

    const updateProduct = (updatedProduct) => {
        axios.patch(`http://localhost:8000/api/products/edit/${id}/`, updatedProduct)
            .then((res) => navigate(-1))
            .catch(e => console.log(e))
    }

    return (
        <ProductForm onSubmit={ updateProduct } initialValues={initialValues} />
    )
}

export default EditProduct