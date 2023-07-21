const express = require("express");
const { authenticate } = require("../middleware/auth/authenticate");
const { ServiceController } = require("../controllers/serivce-controller");

const serviceRouter = express.Router();

serviceRouter.get('/get-all', authenticate, ServiceController.getAll)

module.exports = { serviceRouter };
