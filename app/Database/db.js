var mysql = require('../node_modules/mysql');
var dbManager={};

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "careemdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
});
// Find room id for particular journey assigned to a driver 

dbManager.findroom=function (user, cb) {
  con.query("SELECT roomid FROM journey WHERE driver = '"+user+"'", function (err, res) {
    if (err) cb(err, null);
    cb(null, res);
  });
};

// Customer Sign in
dbManager.custsignin=function (user,pass, cb) {
    var strquery="SELECT 1 FROM customer where user='"+user+"' and pass='"+pass+"'";
    con.query(strquery, function (err, res) {
      if (err) cb(err, null);
      cb(null, res);
    });
};

// Driver Sign in
dbManager.drivsignin=function (user,pass, cb) {
    con.query("SELECT 1 FROM driver where duser='"+user+"' and dpass='"+pass+"'", function (err, res) {
      if (err) cb(err, null);
      cb(null, res);
    });
};

module.exports = dbManager;
