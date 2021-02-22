// Express docs: http://expressjs.com/en/api.html
const express = require("express");
// Passport docs: http://www.passportjs.org/docs/
const passport = require("passport");

// pull in Mongoose model for location
const Location = require("../models/location");

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require("../../lib/custom_errors");

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404;
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership;

// this is middleware that will remove blank fields from `req.body`, e.g.
// { location: { title: '', text: 'foo' } } -> { location: { text: 'foo' } }
const removeBlanks = require("../../lib/remove_blank_fields");
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate("bearer", { session: false });

// instantiate a router (mini app that only handles routes)
const router = express.Router();

// INDEX
// GET /locations
router.get("/locations/:id", (req, res, next) => {
  if (req.params.id === "All") {
    Location.find()
      .then((locations) => {
        // `locations` will be an array of Mongoose documents
        // we want to convert each one to a POJO, so we use `.map` to
        // apply `.toObject` to each one
        return locations.map((location) => location.toObject());
      })
      // respond with status 200 and JSON of the locations
      .then((locations) => res.status(200).json({ locations: locations }))
      // if an error occurs, pass it to the handler
      .catch(next);
  } else {
    Location.find({ borough: req.params.id })
      .then((locations) => {
        // `locations` will be an array of Mongoose documents
        // we want to convert each one to a POJO, so we use `.map` to
        // apply `.toObject` to each one
        return locations.map((location) => location.toObject());
      })
      // respond with status 200 and JSON of the locations
      .then((locations) => res.status(200).json({ locations: locations }))
      // if an error occurs, pass it to the handler
      .catch(next);
  }
});

// UPDATE
// PATCH /locations/5a7db6c74d55bc51bdf39793
router.patch("/locations/:id", removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  //   delete req.body.location.owner;
  console.log("in the patch!! ", req.body, req.params);

  Location.findById(req.params.id)
    .then(handle404)
    .then((location) => {
      console.log(location);
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      //   requireOwnership(req, location);
      location.weights.push({
        weightLbs: req.body.weight,
        enteredBy: req.body.user.email,
      });
      return location.save();

      // pass the result of Mongoose's `.update` to the next `.then`
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next);
});

module.exports = router;
