console.log("loading mongoose");
require("dotenv").config();

// to run this file brinbg .env into the same directory level

// require our instance of mongoose we created
const mongoose = require("../config/db");
// Schema
// const Locations = mongoose.model("Location");
const Locations = require("./models/location");
console.log("booting up locationschemas: ", Locations);
// importing json locations (the data)
const { locations } = require("./locations");

console.log("json locations: ", locations);

console.log("inserting many: ", locations);
async function loadLocations() {
  try {
    await Locations.insertMany(locations);
    console.log("Done!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}

// This is the cleanup script... run if all else fails
// Locations.deleteMany({})

// loadLocations();
