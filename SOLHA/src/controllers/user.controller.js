const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model");

module.exports.currentUserController = async (request, response, next) => {
  try {
    const loggedInUser = request.user;

    response.status(200).send({ data: loggedInUser });
  } catch (error) {
    next(error);
  }
};

module.exports.usersListController = async (request, response, next) => {
  try {
    const { full_name = "", username = "" } = request.query;

    const users = await User.find({
      full_name: { $regex: full_name, $options: "i" },
      username: { $regex: username, $options: "i" },
    });
    response.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.userDetailController = async (request, response, next) => {
  try {
    const { userId } = request.params;
    if (!isValidObjectId(userId))
      return response.status(400).send({ detail: "Invalid user id" });

    const user = await User.findById(userId);

    if (!user)
      return response.status(404).send({ detail: "User not available" });

    response.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
