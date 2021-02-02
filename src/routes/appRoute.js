const express = require("express");
const paymentRoute = require("./accountRoute");
const appRoute = express.Router();

appRoute.initialize = (app) => {
  app.use("/", paymentRoute);
};

module.exports = appRoute;
