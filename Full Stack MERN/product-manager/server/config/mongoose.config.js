const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to database..."))
    .catch((e) => console.log("Something went wrong while connecting to database: ", e))
