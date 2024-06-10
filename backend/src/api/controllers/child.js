const { childServices } = require('../service/child');
const { findAllChildren, createChild } = childServices;

const { schoolServices } = require('../service/schools');
const { findSchool } = schoolServices;

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
*             $ref: '#/definitions/create_child_def'
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
        const { childName, schoolId, dob, standard, gender } = req.body;
        const school = await findSchool({ _id: schoolId });
        if(!school){
            return res.status(400).send({ status: false, message: "School not found."});
        }

        req.body.userId = req.userId;
        const child = await createChild(req.body);
        return res.status(200).send({ status: true, message: "Create Child Successfully.", result: child });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}