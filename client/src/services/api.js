import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080" });

async function login(email, password) {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
}

async function signUp(nickName, email, pwd, confirmPwd) {
  const response = await api.post("/auth/signup", {
    nickName,
    email,
    pwd,
    confirmPwd,
  });
  return response.data;
}

async function addScore(turns, currentUserId) {
  const response = await api.post("/score/addScore", { turns, currentUserId });
  return response.data;
}

async function getUserLastScore(currentUserId) {
  const response = await api.get(`/score/lastScore/${currentUserId}`);
  return response.data;
}

async function getUserBestScore(currentUserId) {
  const response = await api.get(`/score/bestScore/${currentUserId}`);
  return response.data;
}

export { login, signUp, addScore, getUserLastScore, getUserBestScore };
