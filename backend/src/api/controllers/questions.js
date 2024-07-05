
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
const { findAllCompletedLevels, createCompletedLevel, updateCompletedLevel } = completedLevelsService;

const { completedQuestionsService } = require('../service/completedquestions');
const { findAllCompletedQuestions, findCompletedQuestion, createCompletedQuestion, updateCompletedQuestion } = completedQuestionsService;



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
        const { question_id, module_id, level_id, answer, question_no, demo } = req.body;
        let correctAnswerStatus = false, points = 0, nextScreen = "", nextQuestionId = null, nextQuestionNo = null, totalPoints = 0, question;

        let listQuuestions = await findAllQuestions({ module_id, level_id });
        
        if(!demo){
            question = await findQuestion({ _id: question_id, module_id, level_id })
            
            if(question.right_answer == answer){
                correctAnswerStatus = true;
            }
    
            const isCompletedQuesitons = await findCompletedQuestion({question_id, module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user._id });
            if(isCompletedQuesitons && isCompletedQuesitons.correstAnswer == false){
                points = correctAnswerStatus ? 25 : 0;
                await updateCompletedQuestion({ _id: isCompletedQuesitons._id }, {points, correstAnswer: correctAnswerStatus});
            }else{
                points = correctAnswerStatus ? 50 : 0;
                await createCompletedQuestion({
                    question_id, module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user._id,
                    points, correstAnswer: correctAnswerStatus
                });
            }
            
            let listCompletedQuesitons = await findAllCompletedQuestions({module_id, level_id, child_id: req.user.currentChildActive, user_id: req.user._id });
            listQuuestions = listQuuestions.map((question) => {
                const completeQuestion = listCompletedQuesitons.find((completedQuestion) => completedQuestion.question_id.toString() == question._id.toString());
                return { _id: question._id, question_id: question.question_id, attemp: completeQuestion ? true : false, correct: completeQuestion ? completeQuestion.correstAnswer : false, points: completeQuestion ? completeQuestion.points : 0 }
            });
            totalPoints = listQuuestions.reduce((totalPoints, question) => totalPoints + question.points, 0);
        }
        
        if(question_no == 3){
            const question1 = listQuuestions.find((question) => question.question_id == 1);
            if(correctAnswerStatus){
                if(question1.attemp && question1.correct){
                    const question2 = listQuuestions.find((question) => question.question_id == 2);
                    if(question2.attemp && question2.correct){
                        nextScreen = "SCORE_BOARD";
                        if(!demo){
                            await updateCompletedLevel({ module_id: module_id, level_id: level_id, child_id: req.user.currentChildActive, user_id: req.user._id },
                                { $set: { module_id: module_id, level_id: level_id, child_id: req.user.currentChildActive, user_id: req.user._id, completedStatus: true } });
                        }
                        // totalPoints += points;
                    }else{
                        nextQuestionId = question2._id;
                        nextQuestionNo = 2;
                        nextScreen = `Q 2`;
                    }
                }else{
                    nextScreen = `Q 1`;
                    nextQuestionId = question1._id;
                    nextQuestionNo = 1;
                }
            }else{
                if(question1.attemp && question1.correct){
                    const question2 = listQuuestions.find((question) => question.question_id == 2);
                    if(question2.attemp && question2.correct){
                        nextScreen = "SCORE_BOARD";
                        if(!demo){
                            await updateCompletedLevel({ module_id: module_id, level_id: level_id, child_id: req.user.currentChildActive, user_id: req.user._id },
                                { $set: { module_id: module_id, level_id: level_id, child_id: req.user.currentChildActive, user_id: req.user._id, completedStatus: true } });
                        }
                        // totalPoints += points;
                    }else{
                        nextQuestionId = question2._id;
                        nextQuestionNo = 2;
                        nextScreen = `Q 2`;
                    }
                }else{
                    nextQuestionId = question1._id;
                    nextQuestionNo = 1;
                    nextScreen = `Q 1`;
                }
            }
        }else{
            let question_num = Number(question_no) + 1;
            question = listQuuestions.find((question) => question.question_id == question_num);
            nextQuestionId = question._id;
            nextQuestionNo = question_num;
            nextScreen = `Q ${question_num}`;
        }

        return res.status(200).send({
            status: true,
            message: "Attemplt Questions Successfully.",
            result: {
                correctAnswerStatus,
                right_answer: question.right_answer,
                desc: question.desc,
                nextQuestionId,
                nextQuestionNo,
                totalPoints,
                nextScreen
            }
        });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};
