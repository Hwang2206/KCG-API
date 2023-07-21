const moment = require("moment/moment");
const { Memberships, Users, Services } = require("../models");

class MembershipController {
  static async getAll(req, res) {
    try {
      const MembershipsList = await Memberships.findAll();

      res.status(200).send({
        message: "success",
        data: MembershipsList,
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
      const foundMembership = await Memberships.findOne({
        where: {
          user_id: id,
        },
      });

      const foundUser = await Users.findOne({
        where: {
          user_id: foundMembership.user_id,
        },
      });

      const foundService = await Services.findOne({
        where: {
          service_id: foundMembership.service_id,
        },
      });

      if (foundMembership && foundUser && foundService) {
        const data = {
          user_name: foundUser.user_name,
          user_phone: foundUser.user_phone,
          user_email: foundUser.user_email,
          service_name: foundService.service_name,
          expiration_date: foundMembership.expiration_date,
          register_date: foundMembership.register_date,
        };
        res.status(200).send({
          message: "success",
          data: data,
        });
      } else {
        res.status(404).send({
          message: "failed",
          data: "User ID not exits !",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Server is working wrong !",
      });
    }
  }
  static async extendRegister(req, res) {
    try {
      const { id } = req.params;

      const foundMembership = await Memberships.findOne({
        where: {
          user_id: id,
        },
      });

      if (foundMembership) {
        const currentExpirationDate = foundMembership.expiration_date;
        const newExpirationDate = moment(currentExpirationDate).add(30, "days");
        await foundMembership.update({
          expiration_date: newExpirationDate.toDate(),
        });
        res.status(200).send({
          message: "success",
          data: "Extend successfully",
        });
      } else {
        res.status(404).send({
          message: "failed",
          data: "Cannot find Membership",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "error",
        data: "Server is working wrong !",
      });
    }
  }
}

module.exports = { MembershipController };
