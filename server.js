//NPM Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require("mysql");

//Create express app 
var app = express();

//set up serverport for Heroku
var PORT = process.env.PORT || 3000;


// Set Handlebars as template engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up database connection
var connection = mysql.createConnection(
{
	host: "localhost",
	user: "root",
	password: "jeff00",
	database: "burgers_db" 
});

// Initiate listener.
app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});