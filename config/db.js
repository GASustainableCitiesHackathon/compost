'use strict'
const mongoose = require('mongoose')
// creating a base name for the mongodb
const mongooseBaseName = 'GA_hackathon_2021'
// console.log('db is: ', process.env.DB_URI)
// const DB_URI = 'mongodb+srv://dbAdmin:compost123@nyc-compost-sites.fmdip.mongodb.net/GA_hackathon_2021?retryWrites=true&w=majority'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable DB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.DB_URI || localDb

// establish database connection
// use new version of URL parser
// use createIndex instead of deprecated ensureIndex
mongoose.connect(currentDb, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
  })

module.exports = mongoose
