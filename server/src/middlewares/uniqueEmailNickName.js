import { appDB } from "../index.js";

async function uniqueEmailNickName(req, res, next) { 
    try {
        const nickName = req.body.nickName;
        const email = req.body.email;
        const userWithSameEmail = await appDB.from("users").where({ email: email });
        const userWithSameNickName = await appDB.from("users").where({ nickName: nickName });
        console.log(userWithSameEmail, userWithSameNickName)
        if (userWithSameEmail.length > 0 || userWithSameNickName.length > 0) {
            res.status(400).send("this email or nickname already exists!");
            return;
        }
        next();
    
} catch (error) {
    next(error)
}

}

export default uniqueEmailNickName