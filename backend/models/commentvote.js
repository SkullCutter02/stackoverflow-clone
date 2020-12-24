"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommentVote extends Model {
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
  CommentVote.init(
    {
      userUuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      commentUuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      voteType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "comment_votes",
      modelName: "CommentVote",
    }
  );
  return CommentVote;
};
