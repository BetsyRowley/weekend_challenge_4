var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ListingsSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var RentSchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});

var Listings = mongoose.model("Listings", ListingsSchema, "listings");
var RentListings = mongoose.model("RentListings", RentSchema, "listings");

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
  if(req.body.cost) {
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
} else if(req.body.rent) {
  var rentListing = new RentListings();
  rentListing.rent = req.body.rent;
  rentListing.sqft = req.body.rentSqft;
  rentListing.city = req.body.rentCity;
  rentListing.save(function(err, savedRentListing) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(savedRentListing);
    }
  });
}
});

module.exports = router;
