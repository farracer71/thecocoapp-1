// Import required packages
const mongoose = require('mongoose');

// Define the levels schema
const levelsSchema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    level_id: { type: Number, required: true },
    name: { type: String, required: true },
}, { timestamps: true });

// Create the levels model
const levels = mongoose.model('levels', levelsSchema);

// Export levels model
module.exports = levels;