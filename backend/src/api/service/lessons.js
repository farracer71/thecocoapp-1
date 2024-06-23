// Import the lessons model
const lessonsModel = require('../model/Lessons');

// Define lesson services
const lessonServices = {
    // Function to create a new lesson
    createLesson: async (insertObj) => {
        // Create a new lesson in the database using the lessons model
        return await lessonsModel.create(insertObj);
    },
    // Function to insert multiple lessons
    insertLessons: async (insertObj) => {
        // Insert multiple lessons in the database using the lessons model
        return await lessonsModel.insertMany(insertObj);
    },
    // Function to find a lesson by query
    findLesson: async (query) => {
        // Find a lesson in the database based on the query
        return await lessonsModel.findOne(query);
    },
    // Function to count lessons by query
    findLessonCount: async (query) => {
        // Count lessons in the database based on the query
        return await lessonsModel.countDocuments(query);
    },
    // Function to find multiple lessons by query
    findAllLessons: async (query) => {
        // Find multiple lessons in the database based on the query
        return await lessonsModel.find(query);
    },
    // Function to update a lesson based on query
    updateLesson: async (query, updateObj) => {
        return await lessonsModel.findOneAndUpdate(query, updateObj, { new: true, upsert: true });
    },
    // Function to update multiple lessons based on query
    updateManyLessons: async (query, updateObj) => {
        return await lessonsModel.updateMany(query, updateObj, { new: true, upsert: true });
    },
}

// Export the lesson services
module.exports = { lessonServices };
