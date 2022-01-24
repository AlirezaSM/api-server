const express = require('express')
const router = express.Router()
const Movie = require('../model/movie')
const Comment = require('../model/comment')

module.exports = router

// Get comments of a given movie as query parameter
router.get('/comments', async (req, res) => {
    try{
        const movies = await Movie.find({ "id": req.query.movie_id })
        const comments = await Comment.find({ "movie_id": req.query.movie_id })
        res.json({ "movie": movies[0].name, "comments": comments })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Get list of movies
router.get('/movies', async (req, res) => {
    try{
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get information of as single movie
router.get('/movie/:id', async (req, res) => {
    try{
        const movies = await Movie.find({ "id": req.params.id })
        res.json({ "id": movies[0].id, "name": movies[0].name, "description": movies[0].description, "rating": movies[0].rating })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    
    

})