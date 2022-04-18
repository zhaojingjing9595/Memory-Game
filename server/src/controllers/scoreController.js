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

async function getLastScore(req, res, next) {
    try {
        const userId = req.params.id;
        const lastScore = await scoreModel.getLastScore(userId);
        console.log(lastScore)
        if (lastScore) { 
            res.send(lastScore);
            next();
        }

    } catch (error) {
        next(error)
    }
}

async function getBestScore(req, res, next) {
  try {
    const userId = req.params.id;
    const bestScore = await scoreModel.getBestScore(userId);
    console.log(bestScore);
    if (bestScore) {
      res.send(bestScore);
      next();
    }
  } catch (error) {
    next(error);
  }
}

export default { addScore, getLastScore, getBestScore };