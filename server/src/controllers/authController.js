import authModel from "../models/authModel.js";
import bcrypt from "bcrypt"

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          res.status(400).send("email or password missing!");
        }
        const user = await authModel.login(email, password);
        if (user.length === 0) {
            res.status(401).send("invalid email or password!");
        } 

        const result = await bcrypt.compare(password, user[0].hashPassword);
            if (result === true) {
              res.send(user[0]);
              next();
            }
        
    } catch (error) {
        next(error)
    }
}

async function signup(req, res, next) {
    try {
        const { nickName, email, pwd, confirmPwd, hashPassword } = req.body;
        const user = await authModel.signup(
          nickName,
          email,
          pwd,
          confirmPwd,
          hashPassword
        );
        if (user) {
            res.send(user[ 0 ]);
            next();
        }
    } catch (error) {
        next(error)
    }
    
}

export default {login, signup}