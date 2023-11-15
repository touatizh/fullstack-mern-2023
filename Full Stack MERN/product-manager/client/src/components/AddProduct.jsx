import React, {useState} from "react"
import axios from "axios"

const AddProduct = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/products/new-product", {
            title,
            price,
            description
        })
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
        
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="Text" value={ title } onChange={ e => setTitle(e.target.value) } />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" value={ price } onChange={ e => setPrice(e.target.value) } />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="Text" value={ description } onChange={ e => setDescription(e.target.value) } />
                </div>
                <div className="form-group submit">
                    <input type="Submit" className="btn btn-add" defaultValue="Create"/>
                </div>
            </form>
        </>
    )
}

export default AddProduct