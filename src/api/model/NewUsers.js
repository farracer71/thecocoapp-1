// Import required packages
const mongoose = require('mongoose');

// Define the user schema
const newUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: Number },
  otpVerification: { type: Boolean, default: false },
  otpExpireTime: { type: Number },
}, { timestamps: true });

// Create the User model
const NewUser = mongoose.model('Newuser', newUserSchema);

// Export User model
module.exports = NewUser;
