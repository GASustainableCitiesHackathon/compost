// require our instance of mongoose we created
const mongoose = require('../config/db')

// Schema
const Locations = require('./models/location')

// importing json locations (the data)
const { locations } = require('./locations')

Locations.insertMany(locations).then((res) => console.log(res))
