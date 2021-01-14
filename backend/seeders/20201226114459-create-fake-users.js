"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert("users", [
      {
        uuid: "263281a8-1cd2-438c-a843-7e0d799ced4a",
        username: "god",
        email: "god@gmail.com",
        hash: "$2b$10$qTdMb6eEI4dLbntkVJHl8.rCsaabAWxLgE63O3O/rmhX7UetipGWy",
        verified: false,
        reputation: 0,
        role: "god",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
