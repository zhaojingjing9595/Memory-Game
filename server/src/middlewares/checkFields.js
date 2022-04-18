import Ajv from "ajv";
import addFormat from "ajv-formats";
import { logInUserSchema, registerUserSchema } from "../data/userSchema.js";

const ajv = new Ajv();
addFormat(ajv);
const validateReg = ajv.compile(registerUserSchema);
const validatelog = ajv.compile(logInUserSchema);

async function checkRegFields(req, res, next) {
  const valid = validateReg(req.body);
  if (!valid) {
    res.status(400).send("complete all fields");
  }
  next();
}
async function checkLogFields(req, res, next) {
  const valid = validatelog(req.body);
  if (!valid) {
    res.status(400).send("complete all fields");
  }
  next();
}
export { checkRegFields, checkLogFields };
