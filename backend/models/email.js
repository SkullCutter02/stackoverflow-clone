"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
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
  Email.init(
    {
      uuid: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      expirationDate: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "emails",
      modelName: "Email",
    }
  );
  return Email;
};
