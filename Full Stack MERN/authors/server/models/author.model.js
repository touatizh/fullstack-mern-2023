const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide author's name."],
        minLength: [3, "Name should be at least three characters long."]
    }
}, {timestamps: true})

module.exports = mongoose.model("Author", AuthorSchema)