"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasOne(models.Memberships, {
        foreignKey: "user_id"
      })
    }
  }
  Users.init(
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_name: {
        type: DataTypes.STRING(40)
      },
      user_password: {
        type: DataTypes.STRING(50)
      },
      user_email: {
        type: DataTypes.STRING(50),
      },
      user_phone: {
        type: DataTypes.STRING(11),
      },
      user_type: {
        type: DataTypes.BOOLEAN, //true: Admin, false: Customer
      },
      user_active:{
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
