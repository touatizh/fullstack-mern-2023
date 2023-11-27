import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, Stack} from "@mui/material"
import Button from "@mui/material/Button"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

const GetAuthors = () => {

    const navigate = useNavigate()
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/authors/")
            .then((res => setAuthors(res.data.authors)))
            .catch(e => console.log(e))
    })

    const deleteAuthor = (id) => {
        const confirmDelete = window.confirm("Do you really want to delete this author?")
        if (confirmDelete) {
            axios.delete(`http://127.0.0.1:8000/api/authors/delete/${id}`)
            .then(() => {
                const afterDelete = authors.filter(author => author.id !== id)
                setAuthors(afterDelete)
            })
        }
    }

    return (
        <TableContainer component={Paper} style={{ width: "70%"}}>
            <Table size="small">
                <TableHead>
                    <TableRow sx={{backgroundColor: "black"}}>
                        <TableCell sx={{color: "white", textAlign: "center"}}>Author</TableCell>
                        <TableCell sx={{color: "white", textAlign: "center"}}>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        authors.sort((authOne, authTwo) => authOne.name.localeCompare(authTwo.name))
                        .map((author, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{author.name}</TableCell>
                                <TableCell >
                                    <Stack direction="row" justifyContent="center" spacing={2}>
                                        <Button size="small" variant="contained" startIcon={<EditRoundedIcon />}
                                        onClick={() => navigate(`authors/edit/${author._id}`)}>Edit</Button>

                                        <Button color="error" size="small" 
                                        variant="contained" startIcon={<DeleteForeverRoundedIcon />}
                                        onClick={() => deleteAuthor(author._id)}>Delete</Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GetAuthors