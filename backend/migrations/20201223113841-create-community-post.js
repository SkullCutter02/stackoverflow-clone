"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("community_posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      communityId: {
        type: Sequelize.INTEGER,
        references: { model: "communities", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      postId: {
        type: Sequelize.INTEGER,
        references: { model: "posts", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("community_posts");
  },
};
