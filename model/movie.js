const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{id} is not an integer value'
        }
    },
    name: {
        type: String,
        requried: true
    },
    description: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 1,
        default: 0
    },
    comments: {
        type: Array
    }
})

module.exports = mongoose.model('Movie', movieSchema)