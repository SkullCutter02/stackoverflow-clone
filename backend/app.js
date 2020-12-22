const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/posts", require("./routes/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  sequelize
    .authenticate()
    .then(console.log("Database Connected!"))
    .catch((err) => console.log(err));
});
