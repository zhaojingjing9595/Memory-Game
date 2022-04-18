const registerUserSchema = {
  type: "object",
  properties: {
    nickName: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    rePassword: { type: "string" },
  },
  required: ["nickName", "email", "password", "rePassword"],
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
