const express = require("express");
const { authRouter } = require("./auth-router");
const { userRouter } = require("./user-router");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);

module.exports = { rootRouter };
