const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    email: { type: String, required: true },
    country: { type: String },
    phone: { type: String },
    about: { type: String },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userModel);
module.exports = User;
