import { Container } from '@mui/material'
import React, { useState } from 'react'
import UsernameInput from "./UsernameInput"
import Chat from './Chat';


const Main = () => {
    
    const savedUsername = localStorage.getItem("username") || "";
    const [username, setUsername] = useState(savedUsername)
    
    const saveUsername = (userInput) => {
        localStorage.setItem("username", userInput);
        setUsername(userInput);
    }

    return (
        <Container className="d-flex flex-column align-items-center gap-lg-5 min-vh-100">
            <h1 className="col-lg-8 mt-3 border border-dark text-center" style={{backgroundColor: "#dddddd"}}>MERN Chat</h1>
            {username?
            <Chat username={username} />:
            <UsernameInput onSubmit={saveUsername}/>}
        </Container>
    )
}

export default Main;