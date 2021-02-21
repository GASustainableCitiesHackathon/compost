const mongoose = require("../../config/db");
const weightSchema = require("./weight");

const location = new mongoose.Schema(
  {
    borough: { type: String },
    councildist: { type: Number },
    food_scrap_drop_off_site: { type: String },
    hours_from: { type: String },
    hours_to: { type: String },
    latitude: { type: Number },
    location: { type: String },
    longitude: { type: Number },
    ntaname: { type: String },
    operation_day: { type: String },
    open_months: { type: String },
    serviced_by: { type: String },
    borocd: { type: Number },
    ct2010: { type: Number },
    zip_code: { type: Number },
    website: { type: String },
    notes: { type: String },
    weights: [weightSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Location", location);
