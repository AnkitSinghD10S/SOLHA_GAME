const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.authMiddlware = async (request, response, next) => {
  try {
    const token = request.headers.authorization?.split(" ")?.[1];
    if (!token)
      return response
        .status(401)
        .send({ detail: "No Authorization credentials provided." });

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(userId);

    if (!user) return response.status(401).send({ detail: "User not found." });

    request.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return response.status(401).send({ detail: "Invalid Token" });
    }
    next(error);
  }
};
