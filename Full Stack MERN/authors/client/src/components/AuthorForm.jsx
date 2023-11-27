import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {TextField, Button, Stack, Alert} from "@mui/material"

const AuthorForm = ({initials, onSubmit, errors}) => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    useEffect(() => {
        setName(initials.name || "")
    }, [initials])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({name})
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={1} width={400}>
                {errors &&
                errors.map((e, index) => (
                    <Alert key={index} severity="error">{e}</Alert>
                ))}
                <TextField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="error" onClick={() => navigate(-1)}>Cancel</Button>
                    <Button variant="contained" type="submit">Submit</Button>
                </Stack>
            </Stack>
        </form>
    )
}

export default AuthorForm