'use strict';

function generateUser (key) {
  return {
    full_name: `User Name${key}`,
    email: `testmail${key}@mail.com`,
    password: `${key}_1234_user`,
    is_male: Math.random() > 0.5,
    created_at: new Date(),
    updated_at: new Date(),
  }
}

function generateUsers (amount) {
  const usersTo_Create = amount > 500 ? 500 : amount;
  return new Array(usersTo_Create).fill(null).map((__, index) => generateUser(index + 1))
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const futureUsers = generateUsers(100)
    await queryInterface.bulkInsert('users', futureUsers);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
