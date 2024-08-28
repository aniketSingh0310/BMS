const express = require('express');
const { AddMovie, GetAllMovies, UpdateMovie, DeleteMovie} = require('../controller/moviesController');
const movieRouter = express.Router(); 

movieRouter.post('/addMovie', AddMovie);
movieRouter.get('/getAllMovie', GetAllMovies);
movieRouter.patch('/updateMovie',UpdateMovie);
movieRouter.delete('/deleteMovie',DeleteMovie)

// Export the router
module.exports = movieRouter;


// http://localhost:8080/app/v1/users/admin/getAllMovie