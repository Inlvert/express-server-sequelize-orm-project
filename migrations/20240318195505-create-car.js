'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.DATEONLY
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      km: {
        type: Sequelize.DECIMAL(7, 2),
        allowNull: false,
        defaultValue: 0
      },
      color: {
        type: Sequelize.STRING
      },
      isLeft: {
        type: Sequelize.BOOLEAN,
        field: "is_left"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};