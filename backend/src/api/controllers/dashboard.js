const { default: mongoose } = require('mongoose');
const { childServices } = require('../service/child');
const { findAllChildren, insertChild, findChildCount, findChild } = childServices;

const { levelServices } = require('../service/levels');
const { findAllLevels } = levelServices;

const { lessonServices } = require('../service/lessons');
const { findAllLessons } = lessonServices;

const { standardServices } = require('../service/standards');
const { aggregateStandards } = standardServices;

const { completedModulesService } = require('../service/completedmodules');
const { findAllCompletedModules } = completedModulesService;

const { completedLevelsService } = require('../service/completedlevels');
const { findAllCompletedLevels } = completedLevelsService;



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
exports.getAllModules = async (req, res, next) => {
    try {
        const child = await findChild({ _id: req.user.currentChildActive });

        // Pipeline to check if modules are present for the child's standard
        const pipelineIsModulePresent = [
            {
                $match: {
                    standard_id: Number(child.standard),
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
                $addFields: {
                    isModulePresent: { $gt: [{ $size: "$modules" }, 0] },
                },
            }
        ];

        // Aggregate pipeline to check if modules exist
        const result = await aggregateStandards(pipelineIsModulePresent);
        if (result.length === 0 || !result[0].isModulePresent) {
            return res.status(404).send({
                status: false,
                message: `Modules not found.`
            });
        }

        // Fetch all levels and lessons
        const levelsLists = await findAllLevels();
        const lessonsLists = await findAllLessons();

        // Fetch completed modules and levels for the current child
        const completedModulesList = await findAllCompletedModules();
        const completedLevelsList = await findAllCompletedLevels();

        // Process modules to include complete_status for modules and levels
        let processedModules = result[0].modules.map(module => ({
            ...module,
            complete_status: !!completedModulesList.find(element =>
                element.module_id.toString() === module._id.toString() &&
                element.child_id.toString() === req.user.currentChildActive &&
                element.user_id.toString() === req.user._id
            ),
            levels: levelsLists
                .filter(level => level.module_id.toString() === module._id.toString())
                .map(level => ({
                    ...level._doc,
                    complete_status: !!completedLevelsList.find(element =>
                        element.level_id.toString() === level._id.toString() &&
                        element.module_id.toString() === module._id.toString() &&
                        element.child_id.toString() === req.user.currentChildActive &&
                        element.user_id.toString() === req.user._id
                    )
                }))
        }));

        let previousModuleComplete = true; // Assume first module starts with previousModuleComplete as true

        processedModules.forEach(module => {
          // Update current_status for module
          module.current_status = module.complete_status ? false : true;
      
          // Update current_status for levels within the module
          if (module.levels && module.levels.length > 0) {
            let previousLevelComplete = true; // Assume first level in each module starts with previousLevelComplete as true
            module.levels.forEach(level => {
              level.current_status = level.complete_status ? false : true;

              if (level.level_id > 1) {
                level.current_status = previousLevelComplete;
              }

              previousLevelComplete = module.complete_status;
            });
          }
      
          // Update current_status for modules with module_id > 1 based on previous module's complete_status
          if (module.module_id > 1) {
            module.current_status = previousModuleComplete;
          }
      
          previousModuleComplete = module.complete_status;
        });

        return res.status(200).send({
            status: true,
            message: "Get Child Data Successfully.",
            result: {
                ...result[0],
                modules: processedModules
            }
        });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};
