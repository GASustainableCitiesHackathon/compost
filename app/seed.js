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

console.log("json locations: ", locations.length);
Locations.find().then((locations) =>
  console.log("db size", locations.length, "ex: ", locations[0])
);

// console.log("inserting many: ", locations);
// async function loadLocations() {
//   try {
//     await Locations.insertMany(locations);
//     console.log("Done!");
//     process.exit();
//   } catch (e) {
//     console.log(e);
//     process.exit();
//   }
// }
// loadLocations();

// This is the cleanup script... run if all else fails

// const deleteAllData = async () => {
//   try {
//     await Locations.deleteMany();
//     console.log("All Data successfully deleted");
//     // mongoose.connection.close();
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteAllData();
