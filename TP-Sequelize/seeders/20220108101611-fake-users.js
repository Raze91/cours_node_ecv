const { v4: uuid } = require("uuid")

'use strict';

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
    await queryInterface.bulkInsert('Users', [
      {
        id: "5d7ec923-ccd3-4962-99d0-851f30aca6ec",
        lastname: "User",
        firstname: "John",
        email: "johnuser@mail.com",
        username: "JohnUser",
        github: "github-link",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "75938aad-3941-4509-b8d1-a6b583da8ac7",
        lastname: "Admin",
        firstname: "John",
        email: "johnadmin@mail.com",
        username: "JohnAdmin",
        github: "github-link",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
