import express from "express";
import authController from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.route('/login').post(authController.login);
authRoutes.route('/signup').post(authController.signup);

export default authRoutes;