import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

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

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/products/edit/${id}/`, {
            title,
            price,
            description
        })
            .then((res) => navigate(-1))
            .catch(e => console.log(e))
    }

    return (
        <>
            <Col xs={4}>
                <Card>
                    <Card.Header className="p-3" 
                    style={{backgroundColor: "#0a59cc", color: "white"}}>
                        <h5>Editing {product.title}</h5>
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
                                <Button variant="primary" type="submit">Update</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default EditProduct