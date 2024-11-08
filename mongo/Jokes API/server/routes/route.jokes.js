

const JokesController = require("../controllers/controller.jokes")


module.exports = (app) => {
    app.get("/api/jokes", JokesController.findALLJokess);
    app.get("/api/jokes/:id", JokesController.findOneSingleJokes);
    app.post("/api/jokes", JokesController.createNewJokes);
    app.patch("/api/jokes/:id", JokesController.updateExistingJokes);
    app.delete("/api/jokes/:id", JokesController.deleteAnExistingJokes);
}