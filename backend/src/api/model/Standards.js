// Import required packages
const mongoose = require('mongoose');

// Define the standards schema
const standardsSchema = new mongoose.Schema({
    standard_id: { type: Number, required: true },
    name: { type: String, required: true },
}, { timestamps: true });

// Create the standards model
const standards = mongoose.model('standards', standardsSchema);

// Export standards model
module.exports = standards;