
const express = require('express');
const { AddMovie, GetAllMovies, UpdateMovie, DeleteMovie} = require('../controller/moviesController');
const { validateJwtToken } = require('../middleware/authMiddleware');

const movieRouter = express.Router(); 

movieRouter.post('/addMovie',validateJwtToken, AddMovie);
movieRouter.get('/getAllMovie',validateJwtToken, GetAllMovies);
movieRouter.patch('/updateMovie',validateJwtToken,UpdateMovie);
movieRouter.post('/deleteMovie',validateJwtToken,DeleteMovie)

// Export the router
module.exports = movieRouter;


