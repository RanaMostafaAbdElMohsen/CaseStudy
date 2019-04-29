var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "careemdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   con.query("CREATE DATABASE careemdb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
});