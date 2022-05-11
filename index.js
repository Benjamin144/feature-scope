// I am going to use all of the packages installed as dependancies

const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express"); // initializing the express package manager & storing the capabilities as 'express'

// calling express and saving it as featureScope
const featureScope = express();

// acquiring information/datasets via axios by passing through a url to get a response from it to get the data needed for the task.
axios();

// using the listen function here to listen out for featureScope on port 8000 as a constant

featureScope.listen(PORT, () =>
  console.log(`server is listening on port ${8000}`)
); // passing through a callback here, that was defined on PORT variable, which will listen out for changes made on this file.
