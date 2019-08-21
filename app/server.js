// requiring the npm packages express and the path
 var express = require("express");
 var bodyParser = require("body-parser");
 var path = require("path");

//  set up the express app 
var app = express();
var port = process.env. PORT|| 8000 ;

// set up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes 
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// starts the server to begin to listen 
app.listen(PORT, function(){
 console.log("App listening on PORT " + PORT);
});