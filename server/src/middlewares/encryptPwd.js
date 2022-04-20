import bcrypt from "bcrypt";

async function encryptPwd(req, res, next) {
    try {
       const saltRounds = 10;
        const myPlaintextPassword = req.body.pwd;
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
        console.log(hash);
        req.body.hashPassword = hash;
        next();
    } catch (error) {
        next(error)
    }
}

export default encryptPwd;