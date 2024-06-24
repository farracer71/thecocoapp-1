// Import required packages
const mongoose = require('mongoose');

// Define the questions schema
const questionschema = new mongoose.Schema({
    standard_id: { type: mongoose.Schema.Types.ObjectId, ref: 'standards', required: true },
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'modules', required: true },
    level_id: { type: mongoose.Schema.Types.ObjectId, ref: 'levels', required: true },
    question_id: { type: Number, required: true },
    name: { type: String, required: true },
    options: [{
        option_id: { type: Number, required: true },
        name: { type: String, required: true },
        value: { type: String, required: true }
    }],
    right_answer: { type: String, required: true },
    desc: { type: String, default: ''}
}, { timestamps: true });

// Create the questions model
const questions = mongoose.model('questions', questionschema);

// Export questions model
module.exports = questions;