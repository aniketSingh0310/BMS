const express = require('express');
const { validateJwtToken } = require('../middleware/authMiddleware');
const {addTheatre,getAllTheatresByOwnerId,updateTheatre,deleteTheatre,getAllTheatres} = require('../controller/theatreController');

// const theatreRouter = require("express").Router();
const theatreRouter = express.Router(); 


theatreRouter.post("/add-theatre", validateJwtToken, addTheatre);
theatreRouter.post("/get-all-theatres-by-owner",validateJwtToken,getAllTheatresByOwnerId);
theatreRouter.post("/update-theatre", validateJwtToken, updateTheatre);
theatreRouter.post("/delete-theatre", validateJwtToken, deleteTheatre);
theatreRouter.get("/get-all-theatres", validateJwtToken, getAllTheatres);

module.exports = theatreRouter;
