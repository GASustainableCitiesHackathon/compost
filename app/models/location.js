const mongoose = require("mongoose");

const location = new mongoose.Schema(
  {
    borough: { type: String },
    councildist: { type: String },
    food_scrap_drop_off_site: { type: String },
    hours_from: { type: String },
    hours_to: { type: String },
    latitude: { type: String },
    location: { type: String },
    longitude: { type: String },
    ntaname: { type: String },
    notes: { type: String },
    objectid: { type: String },
    operation_day: { type: String },
    open_months: { type: String },
    serviced_by: { type: String },
    website: { type: String },
    borocd: { type: String },
    ct2010: { type: String },
    zip_code: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Location", location);