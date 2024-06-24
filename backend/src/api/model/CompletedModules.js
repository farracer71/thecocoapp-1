// Import required packages
const mongoose = require('mongoose');

// Define the modules schema
const modulesSchema = new mongoose.Schema({
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    child_id: { type: mongoose.Schema.Types.ObjectId, ref: 'children', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    completedStatus: { type: Boolean, default: false } 
}, { timestamps: true });

// Create the modules model
const modules = mongoose.model('completed_modules', modulesSchema);

// Export modules model
module.exports = modules;