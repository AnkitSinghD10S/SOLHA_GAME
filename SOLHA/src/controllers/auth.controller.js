const User = require("../models/user.model");
const { checkForValues } = require("../utils/errorHelpers");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
module.exports.registerController = async (request, response, next) => {
  try {
    const { full_name, email, password } = request.body;

    const [isError, errorObj] = checkForValues({ full_name, email, password });

    if (isError) return response.status(400).send({ detail: errorObj });

    const user = await User.findOne({ email });

    if (user)
      return response
        .status(403)
        .send({ detail: "An account is already associated with this email." });

    const [username, _] = email.split("@");

    const newUser = new User({
      full_name,
      username,
      email,
      password,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    response.status(200).send({ user: newUser, token });
  } catch (error) {
    next(error);
  }
};

module.exports.loginController = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const [isError, errorObj] = checkForValues({ email, password });

    if (isError) return response.status(400).send({ detail: errorObj });

    const user = await User.findOne({ email });

    if (!user)
      return response.status(401).send({ detail: "Invalid Email or Psssword" });
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return response.status(401).send({ detail: "Invalid Email or Psssword" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    response.status(200).send({ user, token });
  } catch (error) {
    next(error);
  }
};
