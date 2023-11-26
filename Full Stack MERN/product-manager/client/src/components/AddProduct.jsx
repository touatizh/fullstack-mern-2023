import React from "react"
import axios from "axios"
import ProductForm from "./ProductForm"

const AddProduct = ({ addToList }) => {

    const handleSubmit = (newProduct) => {
        axios.post("http://localhost:8000/api/products/new-product", newProduct)
            .then(res => addToList(res.data.newProduct))
            .catch(e => console.log(e))
    }

    return (
        <ProductForm onSubmit={handleSubmit} initialValues={{}} />
    )
}

export default AddProduct