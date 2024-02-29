const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  role: { type: String, enum: ["admin", "superuser", "user"], default: "user" },
});

const User = mongoose.model("user", userSchema);

module.exports = User;