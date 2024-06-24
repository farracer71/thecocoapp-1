// Import the Express framework
const express = require('express');

const { validateRequest } = require("../../middlewares")

// Import middleware for token verification
const { verifyToken } = require("../../middlewares");

// Import the controller module for questions operations
const controller = require('../controllers/questions');

// Create a new router instance
const router = express.Router();

// Define a route handler for POST requests to the '/get-all-modules' endpoint
router.post('/attempt-questions', verifyToken, controller.attemptQuestions);

// Export the router instance to make it available for use in other parts of the application
module.exports = router;
