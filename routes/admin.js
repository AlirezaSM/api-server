const express = require('express')
const router = express.Router()
const Movie = require('../model/movie')
const Comment = require('../model/comment')

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
        const newMovie = await Movie.save()
        res.status(204).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a movie with given ID in the path
router.put('/movie/:id', async (req, res) => {
    
    try {
        id = req.params.id
        new_name = req.body.name
        new_description = req.body.description
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

    try {
        const newMovie = await Movie.updateOne({ "id": id }, { $set: { "name": new_name, "description": new_description } })
        res.status(204).json(newMovie)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete a movie with given ID
router.delete('/movie/:id', async (req, res) => {
    
    id = req.params.id
    const count = await Movie.count({ "id": id })

    if (count < 1) {
        res.status(400).json({"message" : "No movies exists with given id="+id })    
    } else {
        try {
            const movies = await Movie.deleteOne({ "id": id })
            res.status(204).json(movies)
        } catch (err) {
            res.status(500).json({"message" : err.message})
        }  
    }
})

// Update a comment with given ID in the path
router.put('/comment/:id', async (req, res) => {
    
    try {
        id = req.params.id
        new_approved = req.body.approved
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

    try {
        const newComment = await Comment.updateOne({ "id": id }, { $set: { "approved": new_approved } })
        res.status(204).json(newComment)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete a comment with given ID
router.delete('/comment/:id', async (req, res) => {
    
    id = req.params.id
    const count = await Comment.count({ "id": id })

    if (count < 1) {
        res.status(400).json({"message" : "No comments exists with given id="+id })    
    } else {
        try {
            const comments = await Comment.deleteOne({ "id": id })
            res.status(204).json(comments)
        } catch (err) {
            res.status(500).json({"message" : err.message})
        }  
    }
})