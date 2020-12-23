"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostVote extends Model {
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
  PostVote.init(
    {
      userUuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      postUuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      voteType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "post_votes",
      modelName: "PostVote",
    }
  );
  return PostVote;
};
