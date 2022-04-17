import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080" });

async function login(currentUser) {
  const response = await api.post("/auth/login", currentUser);
  return response.data;
}

async function signUp(currentUser) {
  const response = await api.post("/auth/signup", currentUser);
  return response.data;
}

export { login, signUp };
