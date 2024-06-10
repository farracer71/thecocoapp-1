// Import the child model
const childModel = require('../model/Child');

// Define child services
const childServices = {
    // Function to create a new child
    createChild: async (insertObj) => {
        // Create a new child in the database using the child model
        return await childModel.create(insertObj);
    },
    // Function to find a child by query
    findChild: async (query) => {
        // Find a child in the database based on the query
        return await childModel.findOne(query);
    },
    // Function to find multiple children by query
    findAllChildren: async (query) => {
        // Find multiple children in the database based on the query
        return await childModel.find(query);
    },
    // Function to update a child based on query
    updateChild: async (query, updateObj) => {
        return await childModel.findOneAndUpdate(query, updateObj, { new: true, upsert: true });
    },
}

// Export the child services
module.exports = { childServices };
