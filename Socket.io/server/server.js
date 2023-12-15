const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors())
const socket = require("socket.io")

const server = app.listen(8000, () => console.log(">>> Listening on port 8000..."))

const io = socket(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
})

io.on("connection", socket => {
    console.log("A new User connected! 🤝🏽");

    socket.on("connected", username => {
        io.emit("userJoined", username);
    })

    socket.on("sendMessage", newMessage => {
        socket.broadcast.emit("messageReceived", newMessage)
    })

})