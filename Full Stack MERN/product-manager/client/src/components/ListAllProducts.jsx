import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

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
        <Col xs={4} className="mt-4">
            <h3 className="mb-3">List of All Products</h3>
            <Card>
                <Card.Body className="d-flex flex-column gap-3">
                    {
                        allProducts.map((product, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-between">
                                <Link className="text-decoration-none" to={`${product._id}`}>{product.title}</Link>
                                <Button variant="danger" className="btn-sm" onClick={ () => handleDelete(product._id, index) }>Delete</Button>
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListAllProducts