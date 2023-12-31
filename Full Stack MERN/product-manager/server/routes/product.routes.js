const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.post("/api/products/new-product", ProductController.addProduct)
    app.get("/api/products/", ProductController.showAll)
    app.get("/api/products/:id", ProductController.showOne)
    app.patch("/api/products/edit/:id/", ProductController.EditProduct)
    app.delete("/api/products/delete/:id", ProductController.DeleteProduct)
}
