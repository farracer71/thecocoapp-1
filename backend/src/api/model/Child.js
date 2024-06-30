// Import required packages
const mongoose = require('mongoose');

// Define the child schema
const childSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'schools' },
  childName: { type: String, required: true },
  dob: { type: Date, required: true },
  standard: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  activeStatus: { type: Boolean, required: true, default: false },
  totalPoints: { type: Number, default: 0 }
}, { timestamps: true });

// Create the child model
const Child = mongoose.model('children', childSchema);

// Export child model
module.exports = Child;
