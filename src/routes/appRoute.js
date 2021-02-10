const express = require("express");
const paymentRoute = require("./accountRoute");
const route= require("./route");
const appRoute = express.Router();

appRoute.initialize = (app) => {
  app.use("/", paymentRoute);
};
appRoute.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


appRoute.use("/user", route);
module.exports = appRoute;