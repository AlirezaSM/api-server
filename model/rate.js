const mongoose = require('mongoose')

const rateSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{id} is not an integer value'
        }
    },
    user: {
        type: String,
        requried: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 1,
        required: true
    },
    movie_id: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{movie_id} is not an integer value'
        },
        required: true
    }
})

module.exports = mongoose.model('Rate', rateSchema)