"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Group.belongsToMany(User, {
        through: 'users_to_groups',
        foreignKey: 'groupId'
      });

      User.belongsToMany(Group, {
        through: 'users_to_grops',
        foreignKey: 'userId'
      })
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
