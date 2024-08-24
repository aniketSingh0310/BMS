const express = require('express');
const { registerUser, loginUser, getCurrentUserInfo } = require('../controller/userController');
const { validateJwtToken } = require('../middleware/authMiddleware');
const router = express.Router(); // Initialize the router

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getCurrentUser',validateJwtToken,getCurrentUserInfo)
// Export the router
module.exports = router;
