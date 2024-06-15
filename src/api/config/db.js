const mongoose = require('mongoose'); // Import mongoose
require("dotenv").config()

const School = require('../model/School');
// MongoDB connection URI
const mongoURI = process.env.mongodb_url;

const importInitialSchoolData = async () => {
    try {
        let initialSchools = [
            {
                "schoolId": 1,
                "email": "school1@example.com",
                "schoolName": "School One",
                "address": "123 First St, Townsville",
                "phoneNumber": 1234567890,
                "PrincipalName": "John Doe",
                "logo": "https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg"
            },
            {
                "schoolId": 2,
                "email": "school2@example.com",
                "schoolName": "School Two",
                "address": "456 Second St, Townsville",
                "phoneNumber": 2345678901,
                "PrincipalName": "Jane Doe",
                "logo": "https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg"
            }
        ];
        const count = await School.countDocuments();
        if (count === 0) {
            await School.insertMany(initialSchools);
            console.log('Initial school data imported successfully.');
        } else {
            console.log('Schools collection is not empty, skipping initial data import.');
        }
    } catch (error) {
        console.error('Error importing initial school data:', error);
    }
};

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected successfully');
        await importInitialSchoolData();
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
