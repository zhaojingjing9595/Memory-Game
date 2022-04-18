import { appDB } from "../index.js";

async function addScore(turns, currentUserId) {
  const newScore = { turns: turns, userId: currentUserId };
  const scoreId = await appDB.from("scores").insert(newScore);
  console.log(scoreId);
  const score = await appDB.from("scores").where({ scoreId: scoreId[0] });
  return score;
}

async function getLastScore(userId) {
    const lastScoreArray = await appDB
      .from("scores")
      .where({ userId: userId })
      .max("created_at");
    const score = await appDB
      .from("scores")
      .where({
        userId: userId,
        created_at: lastScoreArray[0]["max(`created_at`)"],
      });
    return score[0];
}

async function getBestScore(userId) {
     const bestScore = await appDB.from("scores").min('turns').where({ userId: userId });
    const scores = await appDB
      .from("scores")
      .where({ userId: userId, turns: bestScore[0]["min(`turns`)"] });
    return scores[0];
}

export default { addScore, getLastScore, getBestScore };