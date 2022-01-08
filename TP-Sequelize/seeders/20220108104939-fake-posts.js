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
    await queryInterface.bulkInsert('Posts', [
      {
        id: "a6e67dd1-4a83-43f0-82b5-7fcc81309a08",
        title: "Post 1",
        content: "blablabla",
        date: new Date(),
        userId: "5d7ec923-ccd3-4962-99d0-851f30aca6ec",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "45c5118d-87e6-4f4a-b847-aeb2b6ba5ac4",
        title: "Post 2",
        content: "blablabla",
        date: new Date(),
        userId: "5d7ec923-ccd3-4962-99d0-851f30aca6ec",
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
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
