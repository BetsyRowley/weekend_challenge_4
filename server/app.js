var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

///add route require & respective app.use

var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost27017/employees"; //reflect actual db


app.set("port", process.env.PORT || 8000);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Server listening on port: " + app.get("port"));
});
