const express = require("express");
const {
  currentUserController,
  usersListController,
  userDetailController,
} = require("../controllers/user.controller");
const { authMiddlware } = require("../middlewares/auth.middleware");
const userRoute = express.Router();

userRoute.get("/me", authMiddlware, currentUserController);
userRoute.get("/users", authMiddlware, usersListController);
userRoute.get("/users/:userId", authMiddlware, userDetailController);

module.exports = userRoute;