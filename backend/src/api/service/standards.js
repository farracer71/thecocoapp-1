// Import the standards model
const standardsModel = require('../model/Standards');

// Define standard services
const standardServices = {
    // Function to create a new standard
    createStandard: async (insertObj) => {
        // Create a new standard in the database using the standards model
        return await standardsModel.create(insertObj);
    },
    // Function to insert multiple standards
    insertStandards: async (insertObj) => {
        // Insert multiple standards in the database using the standards model
        return await standardsModel.insertMany(insertObj);
    },
    // Function to find a standard by query
    findStandard: async (query) => {
        // Find a standard in the database based on the query
        return await standardsModel.findOne(query);
    },
    // Function to count standards by query
    findStandardCount: async (query) => {
        // Count standards in the database based on the query
        return await standardsModel.countDocuments(query);
    },
    // Function to find multiple standards by query
    findAllStandards: async (query) => {
        // Find multiple standards in the database based on the query
        return await standardsModel.find(query);
    },
    // Function to update a standard based on query
    updateStandard: async (query, updateObj) => {
        return await standardsModel.findOneAndUpdate(query, updateObj, { new: true, upsert: true });
    },
    // Function to update multiple standards based on query
    updateManyStandards: async (query, updateObj) => {
        return await standardsModel.updateMany(query, updateObj, { new: true, upsert: true });
    },
    
    aggregateStandards: async (pipeline) => {
        return await standardsModel.aggregate(pipeline);
    }
}

// Export the standard services
module.exports = { standardServices };
