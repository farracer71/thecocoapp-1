// Import required packages
const mongoose = require('mongoose');

// Define the school schema
const schoolSchema = new mongoose.Schema({
  schoolId: { type: Number, unique: true },
  email: { type: String, required: true, unique: true },
  schoolName: { type: String },
  address: { type: String },
  phoneNumber: { type: Number },
  PrincipalName: { type: String },
  logo: { type: String },
}, { timestamps: true });

// Create the school model
const School = mongoose.model('schools', schoolSchema);

// Export school model
module.exports = School;
