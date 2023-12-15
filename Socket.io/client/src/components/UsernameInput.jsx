import React, { useState } from 'react';
import { TextField, Button, Stack } from "@mui/material"


const UsernameInput = ({onSubmit}) => {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(input)
        setInput("")
    }

    return (
            <Stack className="col-lg-8 d-flex flex-column align-items-start gap-lg-5 border border-dark p-3" style={{minHeight: "30vh"}}>
                <h4 className="text-center w-100">Get Started Right Now</h4>
                    <Stack direction="column" spacing={3} className="w-100">
                        <p className="p-0 fs-5">I want to start chatting with the name...</p>
                        <form onSubmit={handleSubmit}>
                            <Stack direction="row" spacing={5} className="me-2">
                                <TextField className="w-75" variant="standard" placeholder="My name..." value={input} onChange={(e) => setInput(e.target.value)}/>
                                <Button type="submit" variant="contained" className="w-25"
                                sx={{
                                    backgroundColor:"#aac99e", 
                                    color: "black", 
                                    textTransform: "capitalize",
                                    "&:hover": {
                                        backgroundColor: "#aac99e"
                                    }}}
                                    > Start Chatting </Button>
                            </Stack>
                        </form>
                    </Stack>
            </Stack>
    )
}

export default UsernameInput;