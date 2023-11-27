const Author = require("../models/author.model")

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(author => res.json({
            status: "success",
            author: author
        }))
        .catch(e => console.log(e))
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json({
            status: "success",
            author: author
        }))
        .catch(e => console.log(e))
}

module.exports.getAll = (req, res) => {
    Author.find()
        .then(authors => res.json({
            status: "suceess",
            authors: authors
        }))
        .catch(e => console.log(e))
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(author => res.json({
            status: "success",
            author: author
        }))
        .catch(e => console.log(e))
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json({
            status: "success",
            result: result
        }))
        .catch(e => console.log(e))
}
