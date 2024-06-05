// Import the Express framework
const express = require('express');

// Import the auth router module
const auth = require('./routes/auth');

// Create a new router instance
const router = express.Router();

// Mount the auth router under the '/auth' path
router.use('/auth', auth);

// Export the router instance to make it available for use in other parts of the application
module.exports = router;
