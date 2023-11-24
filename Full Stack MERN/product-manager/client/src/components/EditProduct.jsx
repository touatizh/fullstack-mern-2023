import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

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
            .then((res) => navigate(`/${res.data.product._id}`))
            .catch(e => console.log(e))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" value={ price } onChange={ e => setPrice(e.target.value) } />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" value={ description } onChange={ e => setDescription(e.target.value) } />
                </div>
                <div className="form-group submit">
                    <input type="Submit" className="btn btn-add" defaultValue="Update"/>
                </div>
            </form>
        </>
    )
}

export default EditProduct