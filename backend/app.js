const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected!");
});
