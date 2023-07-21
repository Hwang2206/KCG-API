const express = require("express");
const { authRouter } = require("./auth-router");
const { userRouter } = require("./user-router");
const { membershipRouter } = require("./membership-router");
const { serviceRouter } = require("./service-router");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/membership", membershipRouter);
rootRouter.use("/service", serviceRouter);

module.exports = { rootRouter };
