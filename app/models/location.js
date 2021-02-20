const mongoose = require("mongoose");

const location = new mongoose.Schema(
  {
    borough: {
      type: String,
      required: true,
    },
    councildist: {
      type: Number,
      required: true,
    },
    food_scrap_drop_off_site: {
      type: String,
      required: true,
    },
    hours_from: {
      type: String,
      required: true,
    },
    hours_to: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    ntaname: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    objectid: {
      type: Number,
      required: true,
    },
    operation_day: {
      type: String,
      required: true,
    },
    open_months: {
      type: String,
      required: true,
    },
    serviced_by: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    borocd: {
      type: Number,
      required: true,
    },
    ct2010: {
      type: Number,
      required: true,
    },
    point: {
      type: String,
      required: true,
      // how do I integrate this datatype?
      //  "point": {
      //     "type": "Point",
      //     "coordinates": [
      //         -73.94227826999997,
      //         40.842153850000045
      //     ]
      // },
    },
    zip_code: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Example", location);
