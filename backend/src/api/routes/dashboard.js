// Import the Express framework
const express = require('express');

const { validateRequest } = require("../../middlewares")

// Import middleware for token verification
const { verifyToken } = require("../../middlewares");

// Import the controller module for dashboard operations
const controller = require('../controllers/dashboard');

// Create a new router instance
const router = express.Router();

// Define a route handler for GET requests to the '/get-all-modules' endpoint
router.get('/get-all-modules', verifyToken, controller.getAllModules);

// Define a route handler for GET requests to the '/get-all-modules' endpoint
router.get('/get-lessons/:level_id/:module_id', verifyToken, controller.getLessons);

// Export the router instance to make it available for use in other parts of the application
module.exports = router;
