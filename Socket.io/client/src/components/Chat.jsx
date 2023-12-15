import React from "react";
import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { Stack, TextField, Button } from "@mui/material";
import Message from "./Message";

const Chat = ({ username }) => {
    const chatContainerRef = useRef(null);

    const [socket] = useState(() => io(":8000"));
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleJoin = (connectedUser) => {
        const joinMsg = `${connectedUser} has joined the chat`
        if (!messages.includes(joinMsg) && connectedUser !== username) {
            if (!(joinMsg in messages)) setMessages((prev) => {
                return [ ...prev, joinMsg ]
            });
        }
    }

    const handleNewMessage = (newMessage) => {
        setMessages(prev => {
            return [ ...prev, newMessage];
        });
    }

    const sendMessage = () => {
        const newMessage = {
            sender: username,
            content: userInput
        };

        handleNewMessage(newMessage);
        socket.emit("sendMessage", newMessage);
        setUserInput("")
    }

    useEffect(() => {
        const chatContainer = chatContainerRef.current;

        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        socket.emit("connected", username);
        
        socket.on("userJoined", handleJoin);
        socket.on("messageReceived", handleNewMessage);

        return () => {
            socket.off("userJoined", handleJoin);
            socket.off("messageReceived", handleNewMessage);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages, username, socket])

    return (
        <Stack direction="column" className="col-lg-8 d-flex flex-column border border-dark px-2 pt-2 pb-4" 
        sx={{ height: "80vh", minWidth: "100%" }} spacing={3} >
            <Stack ref={chatContainerRef} direction="column" spacing={3} sx={{ overflowY: "auto", minHeight: "65vh"}} >
                {
                    messages.map((msg, index) => (
                        typeof(msg) == "string" ?
                        <em key={index}>{msg}</em> :
                        <Message key={index} 
                        content={msg.content} 
                        user={username}
                        sender={msg.sender}/>
                    ))
                }
            </Stack>

            <Stack direction="row" spacing={5} className="w-100 align-items-center justify-content-around">
                <TextField fullWidth multiline maxRows={5} variant="outlined" autoFocus value={userInput} 
                onChange={e => setUserInput(e.target.value)}
                sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "1px solid #c4c4c4" }
                }}
                />
                <Button className="me-4" type="submit" variant="contained"  sx={{ textTransform: "capitalize" }}
                onClick={sendMessage}> Send </Button>
            </Stack>
        </Stack>
    )
}

export default Chat