import express from "express";
import authController from "../controllers/authController.js";
import {
  checkLogFields,
  checkRegFields,
} from "../middlewares/checkFields.js";
import checkEqualPasswords from "../middlewares/checkPasswords.js";
import encryptPwd from "../middlewares/encryptPwd.js";
import uniqueEmailNickName from "../middlewares/uniqueEmailNickName.js";

const authRoutes = express.Router();

authRoutes.route("/login").post(checkLogFields, authController.login);
authRoutes
  .route("/signup")
  .post(checkRegFields, checkEqualPasswords, uniqueEmailNickName, encryptPwd, authController.signup);

export default authRoutes;
