import React from 'react'
import {Container} from "@mui/material"
import {Link as MuiLink} from "@mui/material"
import { Link } from "react-router-dom"
import UpdateAuthor from "../components/UpdateAuthor"

const Main = () => {
    return (
        <>
            <Container>
                <h1>Favorite Authors</h1>
                <MuiLink underline="none" component={Link} to="/">Home</MuiLink>
                <h4>Edit this author</h4>
                <UpdateAuthor />
            </Container>
        </>
    )
}

export default Main