import React from 'react'
import {Container} from "@mui/material"
import {Link as MuiLink} from "@mui/material"
import { Link } from "react-router-dom"
import AddAuthor from "../components/AddAuthor"

const Main = () => {
    return (
        <>
            <Container>
                <h1>Favorite Authors</h1>
                <MuiLink underline="none" component={Link} to="/">Home</MuiLink>
                <h4>Add a new author</h4>
                <AddAuthor />
            </Container>
        </>
    )
}

export default Main