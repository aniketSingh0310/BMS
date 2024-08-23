const express = require('express');
const { registerUser } = require('../controller/userController');
const router = express.Router(); // Initialize the router

router.post('/register', registerUser);

// Export the router
module.exports = router;
