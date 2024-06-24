// Import required packages
const mongoose = require('mongoose');

// Define the modules schema
const modulesSchema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: Number, required: true },
    name: { type: String, required: true },
}, { timestamps: true });

// Create the modules model
const modules = mongoose.model('modules', modulesSchema);

// Export modules model
module.exports = modules;