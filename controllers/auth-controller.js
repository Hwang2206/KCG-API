const jwt = require("jsonwebtoken");

class AuthController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const jwtSecretKey = process.env.JWT_TOKEN_SECRET_KEY;

      const token = jwt.sign({ foo: 'bar' }, jwtSecretKey, {
        expiresIn: "72000s",
      });

      res.json({
        message: "success",
        token: token,
      });
    } catch (error) {
      res.json({
        message: "failed connect",
      });
    }
  }
}

module.exports = { AuthController };
