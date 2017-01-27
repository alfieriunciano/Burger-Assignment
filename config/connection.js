//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

if (process.env.PORT)
{
	connection = mysql.createConnection(process.env.PORT);
}

else
{

	connection = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		password: "jeff00",
		database: "burgers_db"
	});


}


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;