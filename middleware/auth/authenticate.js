require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const JWT_TOKEN_SECRET_KEY = process.env.JWT_TOKEN_SECRET_KEY;
  try {
    const token = req.headers["token"] || req.body;
    const isAuth = jwt.verify(token, JWT_TOKEN_SECRET_KEY);
    if (isAuth) {
      return next();
    } else {
        res.status(400).send({
            message: "error",
            data: "Invalid token",
          });
    }
  } catch (err) {
    res.status(401).send({
      message: "failed",
      data: "You are not logged in!",
    });
  }
};
module.exports = { authenticate };