const { Users } = require("../models");

class UserController {
  static async getAll(req, res) {
    try {
      const UserList = await Users.findAll();

      res.status(200).send({
        message: "success",
        data: UserList,
      });
    } catch (error) {
      res.status(500).send({
        message: "failed",
        data: "Server is working wrong !",
      });
    }
  }
  static async getByID(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await Users.findOne({
        where: {
          user_id: id,
        },
      });

      if (foundUser) {
        res.status(200).send({
          message: "success",
          data: foundUser,
        });
      } else {
        res.status(404).send({
          message: "failed",
          data: `Cannot find user with id ${id}`,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter",
      });
    }
  }
  static async updateByID(req, res) {
    try {
      const { id } = req.params;
      const { name, phone, email, password, type, active } = req.body;

      const foundUser = await Users.findOne({
        where: {
          user_id: id,
        },
      });

      await foundUser.update({
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_password: password,
        user_type: type,
        user_active: active,
      });

      res.status(200).send({
        message: "success",
        data: "Update Successfully !",
      });
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter",
      });
    }
  }
  static async updateInfoByUser(req, res) {
    try {
      const { id } = req.params;
      const { name, phone, email, password, type, active } = req.body;

      const foundUser = await Users.findOne({
        where: {
          user_id: id,
        },
      });

      await foundUser.update({
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_password: password,
        user_type: type,
        user_active: active,
      });

      res.status(200).send({
        message: "success",
        data: "Update Info User Successfully !",
      });
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter",
      });
    }
  }
  static async deleteByID(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await Users.findOne({
        where: {
          user_id: id,
        },
      });

      await foundUser.destroy();

      res.status(200).send({
        message: "success",
        data: "Delete Successfully !",
      });
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter !",
      });
    }
  }
  static async updatePasswordByID(req, res) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const foundUser = await Users.findOne({
        where: {
          user_id: id,
        },
      });

      await foundUser.update({
        user_password: password,
      });

      res.status(200).send({
        message: "success",
        data: "Update Password Successfully !",
      });
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Lack of parameter !",
      });
    }
  }
}

module.exports = { UserController };
