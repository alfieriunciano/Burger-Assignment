//Node Connection to MySQL

var mysql = require ('mysql');

var connection = mysql.createConnection(
{
	host: "localhost",
	port: 3306,
	user: "root",
	password: "jeff00",
	database: "burgers_db"
});

//Establish connection in terminal

connection.connect(function(err)
{
	if (err)
	{
		console.error('DB Connection Failed');
		throw err;
	}
	console.log('connected as id ' + connection.threadId);
});

//Export the connection

module.exports = connection;