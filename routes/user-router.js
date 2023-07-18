const express = require("express");
const { UserController } = require("../controllers/user-controller");
const { authenticate } = require("../middleware/auth/authenticate");
const { authorize } = require("../middleware/auth/authorize");
const userRouter = express.Router();

userRouter.get("/get-all", authenticate, authorize, UserController.getAll);
userRouter.get("/get-by-id/:id", authenticate, authorize, UserController.getByID);
userRouter.patch("/update-by-id/:id", authenticate, authorize, UserController.updateByID);
userRouter.patch("/update-by-user/:id", authenticate, UserController.updateInfoByUser);
userRouter.patch("/update-password-by-id/:id", authenticate, UserController.updatePasswordByID);
userRouter.delete("/delete-by-id/:id", authenticate, authorize, UserController.deleteByID);


module.exports = { userRouter };
