"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Community, Comment }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
      this.belongsToMany(Community, {
        foreignKey: "postId",
        through: "CommunityPost",
        as: "communities",
      });
      this.hasMany(Comment, { foreignKey: "postId", as: "comments" });
    }

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined };
    }
  }
  Post.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(30000),
        allowNull: false,
      },
      votes: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );
  return Post;
};
