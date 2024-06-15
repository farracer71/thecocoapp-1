// Import the user model
const newUsersModel = require('../model/NewUsers');

// Define user services
const newUserServices = {
    // Function to create a new user
    createNewUser: async (insertObj) => {
        // Create a new user in the database using the user model
        return await newUsersModel.create(insertObj);
    },
    // Function to find a user by query
    findNewUser: async (query) => {
        // Find a user in the database based on the query, excluding the password field
        return await newUsersModel.findOne(query);
    },
    // Function to update a task based on query
    updateNewUser: async (query, updateObj) => {
        return await newUsersModel.findOneAndUpdate(query, updateObj, { new: true, upsert: true});
    },
}

// Export the user services
module.exports = { newUserServices };
