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


// const mongoose = require('mongoose')
// const reviewSchema = require('./review')

// const profileSchema = new mongoose.Schema({
//   city: String,
//   state: { type: String, required: true },
//   instrument: { type: String, required: true },
//   interest: { type: String, required: true },
//   blurb: String,
//   reviews: [reviewSchema],
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// }, {
//   timestamps: true
// })

module.exports = mongoose.model("User", weightSchema);
