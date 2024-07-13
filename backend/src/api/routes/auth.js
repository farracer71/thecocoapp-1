// Import the Express framework
const express = require('express');

const { validateRequest } = require("../../middlewares")
const { loginPinSchema, generateOTPSchema, verifyOTPSchema, signupWithVerifiedEmailSchema, signupWithVerifiedEmailPinSchema, resetPinSchema } = require("../helper/validationSchema")

// Import middleware for token verification
const { verifyToken } = require("../../middlewares");

// Import the controller module for user operations
const controller = require('../controllers/auth');

// Create a new router instance
const router = express.Router();


// Define a route handler for POST requests to the '/signup/generate-otp' endpoint
router.post('/signup/generate-otp', validateRequest(generateOTPSchema), controller.signupGenerateOtp);

// Define a route handler for POST requests to the '/signup/verify-otp' endpoint
router.post('/signup/verify-otp', validateRequest(verifyOTPSchema), controller.signupVerifyOtp);

// Define a route handler for POST requests to the '/signup-with-verfied-email' endpoint
router.post('/signup-with-verfied-email', validateRequest(signupWithVerifiedEmailSchema), controller.signupWithVerifiedEmail);

// Define a route handler for POST requests to the '/signup-with-verfied-email-pin' endpoint
router.post('/signup-with-verfied-email-pin', validateRequest(signupWithVerifiedEmailPinSchema), controller.signupWithVerifiedEmailPin);

// Define a route handler for POST requests to the '/login/generate-otp' endpoint
router.post('/login/generate-otp', validateRequest(generateOTPSchema), controller.loginGenerateOtp);

// Define a route handler for POST requests to the '/login/verify-otp' endpoint
router.post('/login/verify-otp', validateRequest(verifyOTPSchema), controller.loginVerifyOtp);

// Define a route handler for POST requests to the '/login/email-with-pin' endpoint
router.post('/login/email-with-pin', validateRequest(loginPinSchema), controller.loginEmailPin);


// Define a route handler for GET requests to the '/delete-data' endpoint
router.get('/delete-data', verifyToken, controller.deleteData);

// Define a route handler for POST requests to the '/send-otp-for-set-pin' endpoint
router.post('/send-otp-for-set-pin', validateRequest(generateOTPSchema), controller.sendOtpForSetPin);

// Define a route handler for POST requests to the '/verify-otp-for-pin-change' endpoint
router.post('/verify-otp-for-pin-change', validateRequest(verifyOTPSchema), controller.verifyOtpForPinChange);

// Define a route handler for POST requests to the '/reset-pin-password' endpoint
router.post('/reset-pin-password', verifyToken, validateRequest(resetPinSchema), controller.resetPinPassword);

// Export the router instance to make it available for use in other parts of the application
module.exports = router;
