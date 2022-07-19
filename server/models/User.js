const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 3
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);