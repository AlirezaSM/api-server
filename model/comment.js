const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
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

module.exports = mongoose.model('Comment', commentSchema)