import express from "express";
import scoreController from "../controllers/scoreController.js";

const scoreRoutes = express.Router();

scoreRoutes.route("/addScore").post(scoreController.addScore);

export default scoreRoutes;
