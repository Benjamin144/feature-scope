// I am going to use all of the packages installed as dependancies

const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express"); // initializing the express package manager & storing the capabilities as 'express'

// calling express and saving it as featureScope
const featureScope = express();

// setting information/datasets via axios by passing through a url to get a response from it to get the data needed for the task.
const url = "https://www.ebay.co.uk/deals";

axios(url) // this will returm a promise that will be resolved when the task is finished & will get the response data
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html); // using cheerio here to load and pass through the html from the url
    const list = [];

    // looking for this class name in the html, and for 'each' item I find with the identifying class name supplied....
    $(".dne-itemtile-detail", html).each(function () {
      const price = $(this).text(); // I want to take this, items text from the html
      const url = $(this).find("a").attr("href"); //also want to take the attribute of the link target. Also find the a tag in that item
      // for each item that is created I would like to get a title, url and get the lists array and use the push method to push data into it
      // from the array will be an object containing the list and the url.
      list.push({
        price,
        url,
      });
    });
    console.log(list);
  })
  .catch((err) => console.log(err));
// this will then return a response from the server
// using the listen function here to listen out for featureScope on port 8000 as a constant

featureScope.listen(
  PORT,
  () => console.log(`server is listening on PORT ${PORT}`) // passing through a callback here, that was defined on PORT variable, which will listen out for changes made on this file.
);
