const express = require("express");
const { sequelize } = require("./models");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected!");
});
