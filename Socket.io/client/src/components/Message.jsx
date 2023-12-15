import { Box } from "@mui/material"
import React from "react"

const Message = ({user, sender, content}) => {

    const messageBoxStyle = {
        borderRadius: "24px",
        border: "1px solid black",
        padding: "16px",
        maxWidth: "48%",
    }

    return (
        <>
            {
                sender === user ? 
                <Box sx={{
                    ...messageBoxStyle,
                    backgroundColor: "#9fc5f8",
                    alignSelf: "flex-end",
                    marginRight: "8px!important",
                }}>
                    <h6>You said:</h6>
                    <p className="ps-2 text-break">{content}</p>
                </Box> :
                <Box sx={{
                    ...messageBoxStyle,
                    alignSelf: "flex-start",
                    backgroundColor: "#dddddd"
                }}>
                    <h6>{sender} said:</h6>
                    <p className="ps-1 text-break">{content}</p>
                </Box>
            }
        </>
    )
}

export default Message;