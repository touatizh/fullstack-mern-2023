const Joke = require("../models/jokes.model")

module.exports.getAll = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err.message })
        })
}

module.exports.getOne = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({joke: singleJoke}))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err.message })
        })
}

module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({newJoke: newJoke}))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err.message })
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err.message })
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err.message })
        })
}
