// Import required packages
const mongoose = require('mongoose');

// Define the standards schema
const standardsSchema = new mongoose.Schema({
    standard_id: { type: Number, required: true, default: 0 },
    name: { type: String, required: true, default: '' },
}, { timestamps: true });

// Create the standards model
const Standards = mongoose.model('standards', standardsSchema);

// Export standards model
module.exports = Standards;
