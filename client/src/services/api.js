import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080" });

async function login(email, password) {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
}

async function signUp(nickName, email, password, rePassword) { 
    const response = await api.post("/auth/signup", {
      nickName,
      email,
      password,
      rePassword,
    });
    return response.data
}

export default { login, signUp };