"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Memberships.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
      Memberships.belongsTo(models.Services, {
        foreignKey: "service_id"
      })
    }
  }
  Memberships.init(
    {
      member_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      expiration_date: {
        type: DataTypes.DATE,
      },
      register_date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Memberships",
    }
  );
  return Memberships;
};
