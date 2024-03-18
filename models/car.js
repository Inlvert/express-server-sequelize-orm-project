'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    model: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    yearProdaction: {
      type: DataTypes.DATEONLY,
      field: "year_prodaction",
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    km: {
      type: DataTypes.DECIMAL(4, 2),
      defaultValue: 0,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0,
      } 
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "white"
    },
    isRightSteering: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, {
    sequelize,
    modelName: 'Car',
    underscored: true,
    tableName: 'cars',
  });
  return Car;
};