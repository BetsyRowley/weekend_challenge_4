var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//add schema? one for rent & one for sale?
var ListingsSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var Listings = mongoose.model("Listings", ListingsSchema);

//GET all listings
router.get("/", function(req, res) {
  Listings.find(function(err, allListings) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allListings);
  });
});

router.post("/", function(req, res) {
  var listing = new Listings();
  listing.cost = req.body.cost;
  listing.sqft = req.body.sqft;
  listing.city = req.body.city;
  listing.save(function(err, savedListing) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(savedListing);
    }
  });
});

module.exports = router;
