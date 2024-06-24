// Import the levels model
const levelsModel = require('../model/Levels');

// Define level services
const levelServices = {
    // Function to create a new level
    createLevel: async (insertObj) => {
        // Create a new level in the database using the levels model
        return await levelsModel.create(insertObj);
    },
    // Function to insert multiple levels
    insertLevels: async (insertObj) => {
        // Insert multiple levels in the database using the levels model
        return await levelsModel.insertMany(insertObj);
    },
    // Function to find a level by query
    findLevel: async (query) => {
        // Find a level in the database based on the query
        return await levelsModel.findOne(query);
    },
    // Function to count levels by query
    findLevelCount: async (query) => {
        // Count levels in the database based on the query
        return await levelsModel.countDocuments(query);
    },
    // Function to find multiple levels by query
    findAllLevels: async (query) => {
        // Find multiple levels in the database based on the query
        return await levelsModel.find(query);
    },
    // Function to update a level based on query
    updateLevel: async (query, updateObj) => {
        return await levelsModel.findOneAndUpdate(query, updateObj, { new: true, upsert: true });
    },
    // Function to update multiple levels based on query
    updateManyLevels: async (query, updateObj) => {
        return await levelsModel.updateMany(query, updateObj, { new: true, upsert: true });
    },
}

// Export the level services
module.exports = { levelServices };
