const express = require("express");
const { authRouter } = require("./auth-router");

const rootRouter = express.Router()

rootRouter.use("/auth", authRouter);

module.exports = { rootRouter };
