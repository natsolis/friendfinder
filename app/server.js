// requiring the npm packages that will give the website functionality 
 var express = require('express');

//  set up the express app 
var app = express();
var PORT = process.env. PORT|| 3005 ;

// set up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// starts the server to begin to listen 
app.listen(PORT, function(){
 console.log("App listening on PORT " + PORT);
});