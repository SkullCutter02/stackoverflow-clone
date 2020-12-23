"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommunityPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  CommunityPost.init(
    {
      communityId: {
        type: DataTypes.INTEGER,
        references: { model: "communities", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        references: { model: "posts", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "community_posts",
      modelName: "CommunityPost",
    }
  );
  return CommunityPost;
};
