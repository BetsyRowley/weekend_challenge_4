var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var listings = require("./routes/listings.js");

var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/realestate";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err) {
  console.log("Mongo connection error: " + err);
});

MongoDB.once("open", function() {
  console.log("Connected to Mongo!");
});


app.set("port", process.env.PORT || 8000);

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("server/public"));

app.use("/listings", listings);

app.get("/", function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Server listening on port: " + app.get("port"));
});
