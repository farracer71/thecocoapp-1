
const { childServices } = require('../service/child');
const { findAllChildren, insertChild, findChildCount, findChild } = childServices;

const { levelServices } = require('../service/levels');
const { findAllLevels } = levelServices;

const { lessonServices } = require('../service/lessons');
const { findAllLessons } = lessonServices;

const { questionServices } = require('../service/questions');
const { findAllQuestions, findQuestion } = questionServices;

const { standardServices } = require('../service/standards');
const { aggregateStandards, findStandard } = standardServices;

const { completedModulesService } = require('../service/completedmodules');
const { findAllCompletedModules } = completedModulesService;

const { completedLevelsService } = require('../service/completedlevels');
const { findAllCompletedLevels } = completedLevelsService;

const { completedQuestionsService } = require('../service/completedquestions');
const { findAllCompletedQuestions, findCompletedQuestion, createCompletedQuestion } = completedQuestionsService;



/**
* @swagger
* /questions/attempt-questions:
*   post:
*     summary: Attempt Questions
*     tags:
*       - Questions
*     description: Endpoint to attempt questions by submitting the selected answers.
*     produces:
*       - application/json
*     parameters:
*       - in: header
*         name: token
*         description: JWT token obtained after user authentication.
*         required: true
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/attempt_question_def'
*     responses:
*       '200':
*         description: Successfully recorded the attempted question.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: boolean
*                 message:
*                   type: string
*                 data:
*                   type: object
*       '400':
*         description: Invalid input, object invalid.
*       '409':
*         description: Conflict, the question has already been attempted.
*/

exports.attemptQuestions = async (req, res, next) => {
    try {
        const { question_id, module_id, level_id, answer } = req.body;
        let correctAnswerStatus = false, points = 0;

        const question = await findQuestion({ _id: question_id, module_id, level_id })

        if(question.right_answer == answer){
            correctAnswerStatus = true;
        }

        const isCompletedQuesitons = await findCompletedQuestion({question_id, module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user.id, user_id: req.user._id });
        if(isCompletedQuesitons){
            points = correctAnswerStatus ? 50 : 0;
            await createCompletedQuestion({
                question_id, module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user.id, user_id: req.user._id,
                points, correstAnswer: correctAnswerStatus
            });
        }else{
            points = correctAnswerStatus ? 50 : 0;
            await createCompletedQuestion({
                question_id, module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user.id, user_id: req.user._id,
                points, correstAnswer: correctAnswerStatus
            });
        }
        return res.status(200).send({
            status: true,
            message: "Get Child Data Successfully.",
            result: {
                correctAnswerStatus,
                right_answer: question.right_answer,
                desc: question.desc,
            },
            body: req.body,
            question
        });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};
