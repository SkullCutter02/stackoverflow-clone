"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return Promise.all([
      queryInterface.removeColumn("posts", "title"),
      queryInterface.removeColumn("posts", "body"),
      queryInterface.addColumn("posts", "title", Sequelize.STRING(400)),
      queryInterface.addColumn("posts", "body", Sequelize.STRING(10000)),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
