const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", JokesController.getAll)
    app.post("/api/jokes", JokesController.addJoke)
    app.get("/api/jokes/:id", JokesController.getOne)
    app.put("/api/jokes/:id", JokesController.updateJoke)
    app.delete("/api/jokes/:id", JokesController.deleteJoke)
}