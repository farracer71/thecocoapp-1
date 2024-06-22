const { default: mongoose } = require('mongoose');
const { childServices } = require('../service/child');
const { findAllChildren, insertChild, findChildCount, updateManyChild } = childServices;

const { schoolServices } = require('../service/schools');
const { findSchool, findAllSchool } = schoolServices;

const { userServices } = require("../service/users")
const { createUser, findUser, updateUser } = userServices;

/**
* @swagger
* /child/get-all-childs:
*   get:
*     summary: Get All child Records
*     tags:
*       - Child
*     description: Get All child Records
*     produces:
*       - application/json'
*     parameters:
*       - in: header
*         name: token
*         description: JWT token obtained after user authentication
*         required: true
*         type: string
*     responses:
*       '200':  
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*/
exports.getAllChild = async (req, res, next) => {
    try {
        const childData = await findAllChildren({ userId: req.userId });
        return res.status(200).send({ status: true, message: "Get Child Data Successfully.", data: childData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

/**
* @swagger
* /child/create:
*   post:
*     summary: Create child using token
*     tags:
*       - Child
*     description: Create child using token
*     produces:
*       - application/json
*     parameters:
*       - in: header
*         name: token
*         description: JWT token obtained after user authentication
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             items:
*               $ref: '#/definitions/create_child_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*/
exports.createChild = async (req, res, next) => {
    try {
        // Fetch current child list for the user
        let listUsersChild = await findAllChildren({ userId: req.userId });

        // Extract child list from request body
        let childList = req.body;

        // Ensure childList is an array (assuming req.body is an array of children)
        if (!Array.isArray(childList)) {
            return res.status(400).send({ status: false, message: "Request body should be an array of children." });
        }

        // Add userId to each child object in the list
        childList = childList.map((child) => ({ ...child, userId: req.userId }));

        // Check total child count before insertion
        const totalChildCount = listUsersChild.length + childList.length;
        if (totalChildCount > 3) {
            return res.status(400).send({ 
                status: false, 
                message: `Maximum limit exceeded. You can only add up to 3 children. You already have ${listUsersChild.length} children on the platform.` 
            });
        }

        // Set activeStatus for the last child in the list
        childList[childList.length - 1].activeStatus = true;

        // Insert child records
        const insertedChildren = await insertChild(childList);        

        // Update user's currentChildActive field to the last inserted child's ID
        await updateUser({ _id: req.userId }, { $set: { currentChildActive: insertedChildren[insertedChildren.length - 1]._id } });

        if(listUsersChild.length > 0){
            let listUsersChildIds = listUsersChild.map(child => child._id);
            await updateManyChild({ _id: { $in: listUsersChildIds } }, { $set: { activeStatus: false } });
        }

        // Respond with success message and inserted child records
        return res.status(200).send({ 
            status: true, 
            message: "Children created successfully.", 
            result: insertedChildren 
        });
    } catch (error) {
        // Handle any errors during the process
        return res.status(500).send({ status: false, message: error.message });
    }
}
