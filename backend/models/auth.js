const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    follows: {
      type: Array,
    },
    followers: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auth", authSchema);
