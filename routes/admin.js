const express = require('express')
const router = express.Router()
const Movie = require('../model/movie')

module.exports = router

// Insert a new movie
router.post('/movie', async (req, res) => {
    const movie = new Movie({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        comments: req.body.comments
    })
    try {
        const newMovie = await movie.save()
        res.status(204).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})