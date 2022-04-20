const registerUserSchema = {
  type: "object",
  properties: {
    nickName: { type: "string" },
    email: { type: "string" },
    pwd: { type: "string" },
    confirmPwd: { type: "string" },
  },
  required: ["nickName", "email", "pwd", "confirmPwd"],
  additionalProperties: false,
};

const logInUserSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export { registerUserSchema, logInUserSchema };
