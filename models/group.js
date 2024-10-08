"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsToMany(models.User, {
        through: 'users_to_groups',
        foreignKey: 'groupId'
      });
    }
  }
  Group.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      imagePath: {
        type: DataTypes.STRING,
        field: "image_path",
      },
    },
    {
      sequelize,
      modelName: "Group",
      underscored: true,
      tableName: "groups",
    }
  );
  return Group;
};
