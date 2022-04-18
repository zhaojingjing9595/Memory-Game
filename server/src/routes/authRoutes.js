import express from "express";
import authController from "../controllers/authController.js";
import { checkLogFields, checkRegFields } from "../middlewares/checkFields.js";
import checkEqualPasswords from "../middlewares/checkPasswords.js";

const authRoutes = express.Router();

authRoutes.route("/login").post(checkLogFields, authController.login);
authRoutes
  .route("/signup")
  .post(checkRegFields, checkEqualPasswords, authController.signup);

export default authRoutes;
