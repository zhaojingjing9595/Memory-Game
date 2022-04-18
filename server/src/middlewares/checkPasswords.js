async function checkEqualPasswords(req, res, next) {
  if (req.body.pwd !== req.body.confirmPwd) {
    res.status(400).send("passwords doesn't match");
  }
  next();
}

export default checkEqualPasswords;
