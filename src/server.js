const express = require("express");
const config = require("./config/config");
const dbConnection = require('./db/database');
const appRoute = require("./routes/appRoute");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const initializeServer = async () => {
  await dbConnection.establishConnection();
  const app = express();
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors());
  appRoute.initialize(app);
  app.listen(config.app.port, () =>
    console.log("Test server is running on port:", config.app.port)
  );
};

initializeServer();
