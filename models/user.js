'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING(64),
      field: "full_name",
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING(64),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    isMale: {
      type: DataTypes.BOOLEAN,
      field: "is_male",
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    bonusAmount:{
      type: DataTypes.DECIMAL(4, 2),
      field: "bonus_amount",
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0,
      } 
    }

  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    tableName: 'users',
  });
  return User;
};