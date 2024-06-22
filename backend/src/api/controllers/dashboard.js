const { default: mongoose } = require('mongoose');
const { childServices } = require('../service/child');
const { findAllChildren, insertChild, findChildCount } = childServices;

const { schoolServices } = require('../service/schools');
const { findSchool, findAllSchool } = schoolServices;

const standardsModel = require('../model/Standards');

/**
* @swagger
* /dashboard/get-all-modules:
*   get:
*     summary: Get All Modules
*     tags:
*       - Dashboard
*     description: Get All Modules
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
exports.getAllModules = async (req, res, next) => {
    try {
        const pipeline = [
            {
                $match: {
                    standard_id: 4,
                },
            },
            {
                $lookup: {
                    from: "modules",
                    localField: "_id",
                    foreignField: "standard_id",
                    as: "modules",
                },
            },
            {
                $unwind: {
                    path: "$modules",
                },
            },
            {
                $lookup: {
                    from: "levels",
                    localField: "modules._id",
                    foreignField: "module_id",
                    as: "modules.levels",
                },
            },
            {
                $unwind: {
                    path: "$modules.levels",
                },
            },
            {
                $sort: {
                    "modules.levels.level_id": 1,
                },
            },
            {
                $group: {
                    _id: "$_id",
                    standard_id: {
                        $first: "$standard_id",
                    },
                    modules: {
                        $first: "$modules",
                    },
                    levels: {
                        $push: "$modules.levels",
                    },
                },
            },
        ]
        const childData = await standardsModel.aggregate(pipeline);
        return res.status(200).send({ status: true, message: "Get Child Data Successfully.", data: childData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}