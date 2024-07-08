// Import required packages
const mongoose = require('mongoose');

// Define the child schema
const childSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'schools', default: null },
  childName: { type: String, required: true, default: '' },
  dob: { type: Date, required: true, default: Date.now },
  standard: { type: String, required: true, default: '' },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true, default: 'Other' },
  activeStatus: { type: Boolean, required: true, default: false },
  totalPoints: { type: Number, default: 0 },
  profilePic: { type: String, default: "" },
}, { timestamps: true });

// Create the child model
const Child = mongoose.model('children', childSchema);

// Export child model
module.exports = Child;
