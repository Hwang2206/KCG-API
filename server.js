require("dotenv").config();

const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");
const path = require("path");
const { rootRouter } = require("./routes");
const { sequelize } = require("./models");
const port = process.env.PORT;
const app = express();

const publicPath = path.join(__dirname, "./public");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(publicPath));
app.use(express.json())
app.use(cors());
app.use("/kcg-api/v1", rootRouter);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server is running in http://localhost:${port}`);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});



