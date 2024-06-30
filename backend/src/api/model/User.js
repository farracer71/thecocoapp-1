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
  currentChildActive: { type: mongoose.Schema.Types.ObjectId, ref: 'child' },
  otpVerification: { type: Boolean, default: false },
  isCreatedWithOtpVerification: { type: Boolean, default: false },
  otpExpireTime: { type: Number },
  userType: { type: String, enum: [userTypeEnums.USER, userTypeEnums.ADMIN], default: userTypeEnums.USER},
  totalPoints: { type: Number, default: 0 }
}, { timestamps: true });

// Create the User model
const User = mongoose.model('users', userSchema);

// Export User model
module.exports = User;
