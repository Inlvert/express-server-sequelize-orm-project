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
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.DATEONLY
    },
    manufacturer: {
      type: DataTypes.STRING
    },
    km: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0,
      } 
    },
    color: {
      type: DataTypes.STRING
    },
    isLeft: {
      type: DataTypes.BOOLEAN,
      field: "is_left"
    }
  }, {
    sequelize,
    modelName: 'Car',
    underscored: true,
    tableName: "cars"
  });
  return Car;
};