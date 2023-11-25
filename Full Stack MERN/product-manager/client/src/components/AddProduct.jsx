import React, {useState} from "react"
import axios from "axios"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const AddProduct = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {addNewProduct} = props

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/products/new-product", {
            title,
            price,
            description
        })
            .then(res => addNewProduct(res.data.newProduct))
            .catch(e => console.log(e))
        
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <>
            <Col xs={4}>
                <Card>
                    <Card.Header className="p-3" 
                    style={{backgroundColor: "#0a59cc", color: "white"}}>
                        <h5>Add a new Product </h5>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={ handleSubmit } className="d-flex flex-column align-items-center">
                            <Form.Group className="col-8 mb-3" controlId="productTitle">
                                <Form.Control type="text" placeholder="Title" value={ title } onChange={ e => setTitle(e.target.value) } />
                            </Form.Group>
                            <Form.Group className="col-8 mb-3" controlId="productPrice">
                                <Form.Control type="number" placeholder="Price" value={ price } onChange={ e => setPrice(e.target.value) } />
                            </Form.Group>
                            <Form.Group className="col-8 mb-3" controlId="productTitle">
                                <Form.Control as="textarea" rows={3} placeholder="Description" value={ description } onChange={ e => setDescription(e.target.value) } />
                            </Form.Group>
                            <Form.Group controlId="submitButton">
                                <Button variant="primary" type="submit">Add</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default AddProduct