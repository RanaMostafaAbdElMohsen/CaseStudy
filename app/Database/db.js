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
         cb(null, room_id);
    });
 });
};

// Add Voicenote
dbManager.addvoicenote=function (driver_username,url,cb) {
  var voicenote_id=-1;
  con.query("SELECT jid FROM journey where driver='"+driver_username+"'", function (err, res) {
    if (err) cb(err, null);
    var journey_id=res[0].jid;
    var sql_query = "INSERT INTO voicenote (journeyID,url) VALUES ("+journey_id+",'"+url+"')";
    con.query(sql_query, function (err, res) {
      if (err) cb(err, null);
      var query="SELECT voicenoteid FROM voicenote where url='"+url+"'";
        con.query(query, function (err, res) {
          voicenote_id=res[0].voicenoteid.toString();
          cb(null, voicenote_id);
      });
    });
  });
};

dbManager.addplayedvn=function (cust_username,url,cb) {
  var query="SELECT voicenoteid FROM voicenote where url='"+url+"'";
  var voicenote_id=-1;
  con.query(query, function (err, res) {
    if (err) cb(err, null);
    voicenote_id=res[0].voicenoteid;
    var sql_query = "INSERT INTO playedvoicenote (voicenoteid,customerid,Played) VALUES ("+voicenote_id+",'"+cust_username+"',0)";
    console.log(sql_query);
    con.query(sql_query, function (err, res) {
      if (err) cb(err, null);
      cb(null, voicenote_id.toString());
    });
  });
};

dbManager.listened=function (cust_username,id,cb) {
  var query="UPDATE  playedvoicenote SET Played=1 where voicenoteid="+id+" and customerid='"+cust_username+"'";
  con.query(query, function (err, res) {
    if (err) cb(err, null);
    cb(null, res);
   });
};


dbManager.retrievelisteners=function (id,cb) {
  var query="Select COUNT(*) as count from playedvoicenote where voicenoteid="+id;
  con.query(query, function (err, res) {
    if (err) cb(err, null);
    cb(null, res);
   });
};

module.exports = dbManager;
