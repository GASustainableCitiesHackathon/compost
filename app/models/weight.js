const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  timestamps: true,
});

module.exports = mongoose.model("User", weightSchema);
