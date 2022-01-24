const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{id} is not an integer value'
        }
    },
    role: {
        type: Number,
        requried: true,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{role} is not an integer value'
        }
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)