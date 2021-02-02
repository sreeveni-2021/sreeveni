const express = require("express");
const accountController = require("../controllers/accountController");
const paymentRoute = express.Router();

paymentRoute
  .route("/login")
  .post(async (req, res) => {
    let result = await accountController.login(req);
    res.status(result.code).send(result);
  })

module.exports = paymentRoute;
