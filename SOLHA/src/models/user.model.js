const mongoose = require("mongoose");
const bcrypt =require("bcrypt");
const { ENCRYPTION_GEN_ROUNDS } = require("../utils/constants");
const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  imageURL: String,
}
,
{
  toJSON: {
    transform(_, ret) {
      delete ret.password;
    },
  },
});


userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(ENCRYPTION_GEN_ROUNDS);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = new mongoose.model("User", userSchema);  

module.exports = User;
