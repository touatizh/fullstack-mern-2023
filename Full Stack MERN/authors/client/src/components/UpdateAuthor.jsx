import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import AuthorForm from "./AuthorForm"

const EditAuthor = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data.author))
            .catch(e => console.log(e))
    }, [id])
    
    const updateAuthor = (author) => {
        axios.patch(`http://127.0.0.1:8000/api/authors/edit/${id}`, author)
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
        <AuthorForm initials={{name: author.name}} onSubmit={updateAuthor} errors={errors} />
    )
}

export default EditAuthor