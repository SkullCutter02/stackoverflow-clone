const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.enable("trust proxy");

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));
app.use("/communities", require("./routes/communities"));
app.use("/requests", require("./routes/requests"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  sequelize
    .authenticate()
    .then(console.log("Database Connected!"))
    .catch((err) => console.log(err));
});
