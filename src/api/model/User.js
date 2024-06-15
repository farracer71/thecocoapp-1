// Import required packages
const userTypeEnums = require('../enums/userType');
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  deviceType: { type: String },
  deviceToken: { type: String },
  otp: { type: Number },
  otpVerification: { type: Boolean, default: false },
  isCreatedWithOtpVerification: { type: Boolean, default: false },
  otpExpireTime: { type: Number },
  userType: { type: String, enum: [userTypeEnums.USER, userTypeEnums.ADMIN], default: userTypeEnums.USER},
}, { timestamps: true });

// Create the User model
const User = mongoose.model('users', userSchema);

// Export User model
module.exports = User;
