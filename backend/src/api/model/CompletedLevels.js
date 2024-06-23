// Import required packages
const mongoose = require('mongoose');

// Define the levels schema
const levelSchema = new mongoose.Schema({
    level_id: { type: mongoose.Schema.Types.ObjectId, ref: 'levels', required: true },
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    child_id: { type: mongoose.Schema.Types.ObjectId, ref: 'children', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    completedStatus: { type: Boolean, default: false } 
}, { timestamps: true });

// Create the levels model
const levels = mongoose.model('completed_levels', levelSchema);

// Export levels model
module.exports = levels;