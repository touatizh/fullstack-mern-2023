import React, { useState } from "react"
import AuthorForm from "../components/AuthorForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddAuthor = () => {
    
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const addAuthor = (author) => {
        axios.post("http://127.0.0.1:8000/api/authors/new", author)
            .then(() => navigate(-1))
            .catch(e => {
                    const errorResponse = e.response.data.errors
                    const errorArr = []
                    for (const key of Object.keys(errorResponse)) { 
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
    }
    return (
        <AuthorForm initials={{}} onSubmit={addAuthor} errors={errors} />
    )
}

export default AddAuthor