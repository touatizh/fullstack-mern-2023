import React, {useEffect, useState} from "react"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const ProductForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        setTitle(initialValues.title)
        setPrice(initialValues.price)
        setDescription(initialValues.description)
    }, [initialValues])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({title, price, description})
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
                        {initialValues.title? <h5>Updating {initialValues.title}</h5>:<h5>Add a new Product </h5>}
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
                                {initialValues.title?<Button variant="primary" type="submit">Update</Button>:
                                <Button variant="primary" type="submit">Add</Button>}
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ProductForm