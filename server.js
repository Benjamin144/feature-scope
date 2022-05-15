// setting up a server connection with following dependancies

var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// initializing the express app

var express = require("express");
var app = express();

// setting up log for the development area
app.use(logger("dev"));
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

// to include paths required to connect to a public folder
app.use(express.static(process.cwd() + "/public"));

// set the app engine

const { engine } = require("express-handlebars");
app.engine("handlebars", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set up port 8000

var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("Listening to PORT " + port);
});

// need to set up a mongoose database connection
// sets up mongoose environment
// mongoDB already installed as a service
