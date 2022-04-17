import authModel from "../models/authModel.js";

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await authModel.login(email, password);
        if (user.length === 0) {
            res.status(401).send("invalid email or password!");
        } else { 
            res.send(user[ 0 ]);
            next();
        }
    } catch (error) {
        next(error)
    }
}

async function signup(req, res, next) {
    try {
        const { nickName, email, pwd, confirmPwd } = req.body;
        const user = await authModel.signup(nickName, email, pwd, confirmPwd);
        if (user) {
            res.send(user[ 0 ]);
            next();
        }
    } catch (error) {
        next(error)
    }
    
}

export default {login, signup}