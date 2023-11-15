const Product = require("../models/product.model")

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.json({
            message: "success",
            newProduct: product
        }))
        .catch((e) => {
            if (e.name === 'ValidationError') {
                const errorMessages = Object.keys(e.errors).map(key => {
                    return {[key]: e.errors[key].message}
                })
                return res.json({
                    message: "error",
                    errors: errorMessages,
                });
            }
            else {
                res.json({
                    message: "error",
                    errorS: e,
                });
            }
        })
}

module.exports.showAll = (req, res) => {
    Product.find()
        .then((products) => res.json({
            message: "success",
            products: products,
        }))
}