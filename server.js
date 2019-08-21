// requiring the npm packages express and the path
 var express = require("express");
 var path = require("path");

//  set up the express app 
var app = express();
var PORT = 3000;

// set up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());