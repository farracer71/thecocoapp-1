// Import required packages
const mongoose = require('mongoose');

// Define the modules schema
const modulesSchema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: Number, required: true, default: 0 },
    name: { type: String, required: true, default: '' },
}, { timestamps: true });

// Create the modules model
const Modules = mongoose.model('modules', modulesSchema);

// Export modules model
module.exports = Modules;
