import { appDB } from "../index.js";

async function login(email, password) {
  // const { email, password } = currentUser;
  const result = await appDB.from("users").where({ email, password });
  console.log(result);
  return result;
}

async function signup(nickName, email, pwd, confirmPwd, hashPassword) {
  const newUser = {
    nickName: nickName,
    email: email,
    password: pwd,
    rePassword: confirmPwd,
    hashPassword: hashPassword,
  };
  const userId = await appDB.from("users").insert(newUser);
  console.log(userId[0]);
  const user = await appDB.from("users").where({ id: userId[0] });
  console.log(user);
  return user;
}

export default { login, signup };
