const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema(
  {
    weightLbs: {
      type: Number,
      required: true,
    },
    enteredBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = weightSchema;
