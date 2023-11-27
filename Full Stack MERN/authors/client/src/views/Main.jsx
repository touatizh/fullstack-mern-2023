import React from 'react'
import {Container} from "@mui/material"
import {Link as MuiLink} from "@mui/material"
import { Link } from "react-router-dom"
import GetAuthors from '../components/GetAuthors'

const Main = () => {
    return (
        <>
            <Container>
                <h1>Favorite Authors</h1>
                <MuiLink underline="none" component={Link} to="authors/new">Add an author</MuiLink>
                <h4>We have quotes by:</h4>
                <GetAuthors />
            </Container>
        </>
    )
}

export default Main