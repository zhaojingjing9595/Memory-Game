import express from "express";
import scoreController from "../controllers/scoreController.js";

const scoreRoutes = express.Router();

scoreRoutes.route("/addScore").post(scoreController.addScore);
scoreRoutes.route("/lastScore/:id").get(scoreController.getLastScore);
scoreRoutes.route("/bestScore/:id").get(scoreController.getBestScore);

export default scoreRoutes;
