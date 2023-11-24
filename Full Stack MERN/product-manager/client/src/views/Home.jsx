import React, { useState, useEffect } from "react"
import axios from "axios"
import ListAllProducts from "../components/ListAllProducts"
import AddProduct from "../components/AddProduct"

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch(e => console.log(e))
    })

    const addProduct = (newProduct) => {
        setProducts((prev) => [...prev, newProduct])
    }

    const deleteProduct = (indexToDelete) => {
        const afterDelete = products.filter((_, index) => index !== indexToDelete)
        setProducts(afterDelete)
    }

    return (
        <>
            <AddProduct addNewProduct={ addProduct } />
            <ListAllProducts allProducts={ products } onDelete={deleteProduct} />
        </>
    )
}

export default Home