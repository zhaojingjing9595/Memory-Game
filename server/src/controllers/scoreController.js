import scoreModel from "../models/scoreModel.js";

async function addScore(req, res, next) {
    try {
        const { turns, currentUserId } = req.body;
        const score = await scoreModel.addScore(turns, currentUserId);
        if (score) { 
            res.send(score[0])
            next();
        }

    } catch (error) {
        next(error)
    }
}

export default {addScore}