const mongoose = require('mongoose'); // Import mongoose
require("dotenv").config()

const School = require('../model/School');
const Standards = require('../model/Standards');
const Modules = require('../model/Modules');

let initialSchools = require('../data/schools');
let initialStandards = require('../data/standards');
let initialModules = require('../data/modules.json');

// MongoDB connection URI
const mongoURI = process.env.mongodb_url;

const importInitialSchoolData = async () => {
    try {
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

const importInitialStandards = async () => {
    try {
        const count = await Standards.countDocuments();
        if (count === 0) {
            await Standards.insertMany(initialStandards);
            console.log('Initial Standards data imported successfully.');
        } else {
            console.log('Standards collection is not empty, skipping initial data import.');
        }
    } catch (error) {
        console.error('Error importing initial school data:', error);
    }
};


const importInitialModules = async () => {
    try {
        const standardsList = await Standards.find();
        const updatedModules = initialModules.map((element) => {
            const standard = standardsList.find((standard) => standard.standard_id == element.standard_id);
            if (standard) {
                return {
                    ...element,
                    standard_id: standard._id // Use ObjectId directly
                };
            } else {
                throw new Error(`Standard with standard_id ${element.standard_id} not found`);
            }
        });
        
        const count = await Modules.countDocuments();
        if (count === 0) {
            console.log(updatedModules);
            await Modules.insertMany(updatedModules);
            console.log('Initial Modules data imported successfully.');
        } else {
            console.log('Modules collection is not empty, skipping initial data import.');
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
        await importInitialStandards();
        await importInitialModules();
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
