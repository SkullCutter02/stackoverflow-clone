"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      this.belongsToMany(Post, {
        foreignKey: "communityId",
        through: "CommunityPost",
        as: "posts",
      });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Community.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "communities",
      modelName: "Community",
    }
  );
  return Community;
};
