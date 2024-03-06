const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const routes = express.Router();

routes.use("/auth", authRoute);
routes.use("/", userRoute);

module.exports = routes;
