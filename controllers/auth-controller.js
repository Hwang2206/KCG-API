require("dotenv").config();
const moment = require("moment/moment");
const { Users, Memberships } = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
class AuthController {
  static async login(req, res) {
    try {
      const { phone, password } = req.body;

      const foundUser = await Users.findOne({
        where: {
          user_phone: phone,
          user_password: password,
        },
      });

      if (!foundUser) {
        res.status(404).send({
          message: "failed",
          data: "Wrong Phone or Password ! Please try again !",
        });
      } else if (foundUser.user_active) {
        const jwtSecretKey = process.env.JWT_TOKEN_SECRET_KEY;
        const tokenData = {
          user_name: foundUser.user_name,
          user_phone: foundUser.user_phone,
          user_id: foundUser.user_id,
          user_password: foundUser.user_password,
          user_email: foundUser.user_email,
          user_type: foundUser.user_type,
          user_active: foundUser.user_active,
          createdAt: foundUser.createdAt,
        };
        const token = jwt.sign(tokenData, jwtSecretKey, {
          expiresIn: "72000s",
        });

        res.status(200).send({
          message: "success",
          data: token,
        });
      } else {
        res.status(403).send({
          message: "failed",
          data: "You have blocked !",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(406).send({
        message: "error",
        data: "Missed Phone or Password !",
      });
    }
  }
  static async register(req, res) {
    try {
      const { name, phone, email, password } = req.body;

      const oldUser = await Users.findOne({
        where: {
          [Op.or]: [{ user_phone: phone }, { user_email: email }],
        },
      });

      if (oldUser) {
        res.status(403).send({
          message: "failed",
          data: "User is already exits!",
        });
      } else {
        const newUser = {
          user_name: name,
          user_phone: phone,
          user_email: email,
          user_password: password,
          user_type: false,
          user_active: true,
          createdAt: moment().utcOffset(-420),
          updatedAt: moment().utcOffset(-420),
        };
        await Users.create(newUser); 
        const foundUser = await Users.findOne({
          where: {
            user_phone: newUser.user_phone
          }
        })
        if(foundUser) {
          await Memberships.create({
            user_id: foundUser.user_id,
            expiration_date: Date.now(),
            register_date: Date.now()
          })
          res.status(200).send({
            message: "success",
            data: newUser,
          });
        }else {
          res.status(404).send({
            message: "failed",
            data: "Cannot create membership",
          });
        }
        
      }
    } catch (err) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter",
      });
    }
  }
}

module.exports = { AuthController };
