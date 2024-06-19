// Import required packages
const mongoose = require('mongoose');

// Define the lessons schema
const lessionSchema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    level_id: { type: mongoose.Schema.Types.ObjectId, ref: 'levels', required: true },
    lesson_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

// Create the lessons model
const lessons = mongoose.model('lessons', lessionSchema);

// Export lessons model
module.exports = lessons;