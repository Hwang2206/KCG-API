const express = require("express");
const { AuthController } = require("../controllers/auth-controller");

const authRouter = express.Router()

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);

module.exports = { authRouter };
