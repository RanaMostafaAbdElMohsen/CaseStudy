var mysql = require('../node_modules/mysql');
var dbManager={};

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "careemdb"
});

con.connect(function(err) {
  if (err) cb(err, null);
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

// Find Journeys
dbManager.findjourneys=function (cb) {
  con.query("SELECT details FROM journey", function (err, res) {
    if (err) cb(err, null);
    cb(null, res);
  });
};

// subscribe journey
dbManager.subscribejourney=function (username,journeydetails,cb) {

  var journey_id=-1;
  var room_id=-1;
  // Get Journey ID
  var query="SELECT jid,roomid FROM journey where details='"+journeydetails+"'";

  con.query(query, function (err, res) {
    if (err) cb(err, null);
    
    journey_id=res[0].jid;
    room_id=res[0].roomid;

    var sql_query = "INSERT INTO trip (cuser, idjourney,cstatus) VALUES ('"+username+"',"+journey_id+",'0')";

    con.query(sql_query, function (err, res) {
      if (err) cb(err, null);
      cb(null, room_id);
    });
 });
};


module.exports = dbManager;
