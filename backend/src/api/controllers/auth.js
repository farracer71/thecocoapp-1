const mongoose = require('mongoose');

const { userServices } = require("../service/users")
const { createUser, findUser, updateUser } = userServices;

const { newUserServices } = require("../service/newusers")
const { findNewUser, createNewUser, updateNewUser } = newUserServices;

const commonFunction = require("../helper/utils");
const userTypeEnums = require("../enums/userType");

/**
* @swagger
* /auth/signup/generate-otp:
*   post:
*     summary: Generate OTP when user is signed up
*     tags:
*       - User Authentication
*     description: Generate OTP when user is signed up
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/user_generate_otp_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*/
exports.signupGenerateOtp = async (req, res, next) => {
    try {
        const { email } = req.body;

        const existingUser = await findNewUser({ email: email });
        const otp = await commonFunction.generateOTP();
        const otpExpireTime = new Date().getTime() + 180000;

        if (existingUser) {
            if (existingUser.otpVerification) {
                return res.status(409).send({ status: false, message: "Email already exists" });
            }

            await commonFunction.sendSignupGenerateOTPMail(email, otp);
            await updateNewUser({ _id: existingUser._id }, { otp, otpExpireTime });

            return res.status(200).send({ status: true, message: "OTP sent successfully.", email: email });
        }

        await commonFunction.sendSignupGenerateOTPMail(email, otp);
        await createNewUser({ email, otp, otpExpireTime });

        return res.status(200).send({ status: true, message: "OTP sent successfully.", email: email });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

/**
* @swagger
* /auth/signup/verify-otp:
*   post:
*     summary: Verify OTP when user is signed up
*     tags:
*       - User Authentication
*     description: Verify OTP when user is signed up
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/user_verify_otp_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*       '410':
*         description: Gone
*/
exports.signupVerifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;

        const existingUser = await findUser({ email: email });
        if (!existingUser) {
            return res.status(400).send({ status: false, message: "Email not registerd." });
        }

        if (existingUser.otpVerification == true) {
            return res.status(200).send({ status: true, message: "OTP already verified.", email: email });
        }

        if (existingUser.otp != otp) {
            return res.status(400).send({ status: false, message: "OTP not matched." });
        }

        // Check if the OTP has expired
        if (new Date().getTime() > existingUser.otpExpireTime) {
            return res.status(410).send({ status: false, message: "OTP has expired." });
        }

        
        const user = await updateUser({ _id: existingUser._id }, { otpVerification: true, isCreatedWithOtpVerification: true });
        const token = await commonFunction.generateJWT({ email: email, id: user._id });
        return res.status(200).send({ status: true, message: "OTP verified successfully.", user, token });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

/**
* @swagger
* /auth/signup-with-verfied-email:
*   post:
*     summary: Sign up with verified email
*     tags:
*       - User Authentication
*     description: Endpoint for user signup using a verified email. The user must provide an email and OTP for verification.
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/user_signup_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*       '410':
*         description: Gone
*/
exports.signupWithVerifiedEmail = async (req, res, next) => {
    try {
        const { email, name } = req.body;

        const existingUser = await findUser({ email: email });
        const otp = await commonFunction.generateOTP();
        const otpExpireTime = new Date().getTime() + 180000;

        if (existingUser) {
            if (existingUser.otpVerification) {
                return res.status(409).send({ status: false, message: "Email already exists" });
            }

            await commonFunction.sendSignupGenerateOTPMail(email, otp);
            await updateUser({ _id: existingUser._id }, { otp, otpExpireTime });

            return res.status(200).send({ status: true, message: "OTP sent successfully.", email: email });
        }

        await commonFunction.sendSignupGenerateOTPMail(email, otp);
        await createUser({ name, email, otp, otpExpireTime });
        return res.status(200).send({ status: true, message: "OTP sent successfully.", email: email });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

/**
* @swagger
* /auth/login/generate-otp:
*   post:
*     summary: Generate OTP when user is login
*     tags:
*       - User Authentication
*     description: Generate OTP when user is login
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/user_generate_otp_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*/
exports.loginGenerateOtp = async (req, res, next) => {
    try {
        const { email } = req.body;

        const existingUser = await findUser({ email: email });
        if (!existingUser) {
            return res.status(400).send({ status: false, message: "Email not registerd." });
        }

        const otp = await commonFunction.generateOTP();
        const otpExpireTime = new Date().getTime() + 180000;
        await commonFunction.sendLoginGenerateOTPMail(email, otp);
        await updateUser({ _id: existingUser._id }, { otp, otpExpireTime });
        return res.status(200).send({ status: true, message: "OTP sent successfully.", email: email });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

/**
* @swagger
* /auth/login/verify-otp:
*   post:
*     summary: Verify OTP when user is login
*     tags:
*       - User Authentication
*     description: Verify OTP when user is login
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/user_verify_otp_def'
*     responses:
*       '200':
*         description: OK
*       '400':
*         description: Bad Request
*       '409':
*         description: Conflict
*       '410':
*         description: Gone
*/
exports.loginVerifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;

        const existingUser = await findUser({ email: email });
        if (!existingUser) {
            return res.status(400).send({ status: false, message: "Email not registerd." });
        }

        if (existingUser.otp != otp) {
            return res.status(400).send({ status: false, message: "OTP not matched." });
        }

        // Check if the OTP has expired
        if (new Date().getTime() > existingUser.otpExpireTime) {
            return res.status(410).send({ status: false, message: "OTP has expired." });
        }

        const user = await updateUser({ _id: existingUser._id }, { otpVerification: true });
        const token = await commonFunction.generateJWT({ email: email, id: user._id });
        return res.status(200).send({ status: true, message: "User Login successfully.", user, token });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}