// Import required packages
const mongoose = require('mongoose');

// Define the child schema
const childSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'schools', required: false, default: null },
  childName: { type: String, required: true, default: '' },
  dob: { type: Date, required: false, default: Date.now },
  standard: { type: String, required: false, default: '' },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: false, default: 'Other' },
  activeStatus: { type: Boolean, required: false, default: false },
  totalPoints: { type: Number, default: 0 },
  profilePic: { type: String, default: "" },
}, { timestamps: true });

// Create the child model
const Child = mongoose.model('children', childSchema);

// Export child model
module.exports = Child;
