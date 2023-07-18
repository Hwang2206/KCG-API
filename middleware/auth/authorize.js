require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Users } = require("../../models");

const authorize = async (req, res, next) => {
  try {
    const JWT_TOKEN_SECRET_KEY = process.env.JWT_TOKEN_SECRET_KEY;
    const token = req.headers["token"] || req.body;
    const { user_id } = jwt.verify(token, JWT_TOKEN_SECRET_KEY);

    const foundUser = await Users.findOne({
      where: {
        user_id,
      },
    });
    const isAdmin = foundUser.user_type

    if (isAdmin) {
      return next();
    } else {
      res.status(403).send({
        message: 'failed',
        data: 'You do not have permission !'
      })
    }
  } catch (err) {
    res.status(500).send({
      message: 'error',
      data: 'Server is working wrong !'
    })
  }
};

module.exports = { authorize };