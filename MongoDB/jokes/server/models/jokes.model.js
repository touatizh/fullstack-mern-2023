const mongoose = require('mongoose');

const JokesSchema = mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup required"]
        },
        punchline: {
            type: String,
            required: [true, "Punchline required"]
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }
    }
)

JokesSchema.pre('save', function(next) {
    this.createdAt = new Date()
    this.updatedAt = new Date();
    next();
    });
JokesSchema.pre('updateOne', function() {
    this.set({ updatedAt: new Date() });
    });

JokesSchema.pre('updateMany', function() {
    this.set({ updatedAt: new Date() });
    });

const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke