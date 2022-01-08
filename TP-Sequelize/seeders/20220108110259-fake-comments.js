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
    await queryInterface.bulkInsert("Comments", [
      {
        id: "82439c64-71d2-47e4-b3d8-dea6b966acfc",
        content: "It rains a lot these days !",
        date: new Date(),
        userId: "5d7ec923-ccd3-4962-99d0-851f30aca6ec",
        postId: "a6e67dd1-4a83-43f0-82b5-7fcc81309a08",
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
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
