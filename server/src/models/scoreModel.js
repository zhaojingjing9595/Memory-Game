import { appDB } from "../index.js";

async function addScore(turns, currentUserId) {
  const newScore = { turns: turns, userId: currentUserId };
  const scoreId = await appDB.from("scores").insert(newScore);
  console.log(scoreId);
  const score = await appDB.from("scores").where({ scoreId: scoreId[0] });
  return score;
}

export default {addScore}