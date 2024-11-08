// the controller does the CRUD for the DB
// import the model here
const Jokes = require("../models/model.jokes")

//? READ ALL 
module.exports.findALLJokess = (req, res) => {
    Jokes.find() //[]
        .then((AllJokess) => {
            console.log(">>> this is ALL My Jokess ", AllJokess)
            res.json(AllJokess)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => {
            res.json(oneSingleJokes)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJokes => {
            res.json({ Jokes: newlyCreatedJokes })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.updateExistingJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => {
            res.json({ Jokes: updatedJokes })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingJokes = (req,res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}