const { v4: uuid } = require("uuid")

'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Roles', [
      {
        id: "e4242639-b5b0-49b5-8870-1198d44ab787",
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "43bd9d2a-0d19-4106-a835-25f06ad194a5",
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
