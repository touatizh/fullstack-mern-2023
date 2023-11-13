const express = require("express")
const app = express()

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

const routes = require("./routes/jokes.routes")
routes(app)

app.listen(8000, () => console.log("listening on port 8000..."))