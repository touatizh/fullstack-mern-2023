import React from "react"
import { Link } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import DeleteButton from "./DeleteButton"

const ListAllProducts = ({allProducts, removeFromList}) => {
    
    const postDelete = (indexToDelete) => removeFromList(indexToDelete)

    return (
        <Col xs={4} className="mt-4">
            <h3 className="mb-3">List of All Products</h3>
            <Card>
                <Card.Body className="d-flex flex-column gap-3">
                    {
                        allProducts.map((product, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-between">
                                <Link className="text-decoration-none" to={`${product._id}`}>{product.title}</Link>
                                <DeleteButton index={index} prodId={product._id} onDelete={ postDelete } />
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListAllProducts