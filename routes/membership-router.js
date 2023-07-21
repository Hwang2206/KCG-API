const express = require('express')
const { MembershipController } = require('../controllers/membership-controller')
const { authenticate } = require('../middleware/auth/authenticate')
const membershipRouter = express.Router()

membershipRouter.get('/get-all', authenticate, MembershipController.getAll)
membershipRouter.get('/get-by-id/:id', authenticate, MembershipController.getByID)
membershipRouter.post('/extend/:id', authenticate, MembershipController.extendRegister)

module.exports = { membershipRouter }