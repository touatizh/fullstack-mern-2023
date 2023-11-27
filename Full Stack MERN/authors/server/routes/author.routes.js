const AuthorController = require("../controllers/author.controller")

module.exports = (app) => {
    app.get("/api/authors/", AuthorController.getAll)
    app.get("/api/authors/:id", AuthorController.getOne)
    app.post("/api/authors/new", AuthorController.create)
    app.patch("/api/authors/edit/:id", AuthorController.update)
    app.delete("/api/authors/delete/:id", AuthorController.delete)
}