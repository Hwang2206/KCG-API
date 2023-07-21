const { Services } = require("../models");

class ServiceController {
  static async getAll(req, res) {
    try {
      const ServiceList = await Services.findAll();

      if (ServiceList) {
        res.status(200).send({
          message: "success",
          data: ServiceList,
        });
      } else {
        res.status(404).send({
          message: "failed",
          data: "Cannot get list Service !",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "failed",
        data: "Server is working wrong !",
      });
    }
  }
}

module.exports = { ServiceController }
