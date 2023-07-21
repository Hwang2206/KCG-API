'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Services.hasMany(models.Memberships, {
        foreignKey: "service_id"
      })
    }
  }
  Services.init({
    service_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    service_name: {
      type: DataTypes.STRING(20),
    },
    service_price: {
      type:DataTypes.DOUBLE
    },
    service_url: {
      type:DataTypes.STRING
    },
    service_description: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Services',
  });
  return Services;
};