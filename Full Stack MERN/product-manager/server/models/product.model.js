const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title for the product."],
        minLength: [3, "Title should be 3 characters or more."]
    },
    price: {
        type: Number,
        required: [true, "Please provide a price for the product."],
        min: [0, "Price should be a positive number."]
    },
    description: {
        type: String,
        required: false,
        default: "",
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema)