import React from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

const DeleteButton = ({prodId, onDelete, index }) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        const confirmDelete = window.confirm("Do you really want to delete this product?")

        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/products/delete/${prodId}`)
                .then(() => {
                    if (onDelete && index !== undefined) onDelete(index)
                    else navigate("/")
                })
                .catch(e => console.log(e))
        }
    }
    return (
        <Button variant="danger" onClick={ handleDelete }>Delete</Button>
    )
}

export default DeleteButton