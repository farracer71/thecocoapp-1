// Import required packages
const mongoose = require('mongoose');

// Define the lessons schema
const lessonSchema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    level_id: { type: mongoose.Schema.Types.ObjectId, ref: 'levels', required: true },
    lesson_id: { type: Number, required: true, default: 0 },
    name: { type: String, required: true, default: '' },
    description: { type: String, required: true, default: '' },
}, { timestamps: true });

// Create the lessons model
const Lessons = mongoose.model('lessons', lessonSchema);

// Export lessons model
module.exports = Lessons;
