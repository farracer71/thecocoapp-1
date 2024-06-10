const mongoose = require('mongoose');

const { schoolServices } = require('../service/schools');
const { findAllSchool } = schoolServices;

/**
* @swagger
* /school/get-all-schools:
*   get:
*     summary: Get All School Records
*     tags:
*       - Schools
*     description: Get All School Records
*     produces:
*       - application/json'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*/
exports.getAllSchools = async (req, res, next) => {
    try {
        const schoolData = await findAllSchool();
        return res.status(200).send({ status: true, message: "Get Schools Data Successfully.", data: schoolData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}