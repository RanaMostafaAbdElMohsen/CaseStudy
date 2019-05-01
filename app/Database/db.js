var mysql = require('../node_modules/mysql');
var dbManager={};

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "careemdb"
});

// Find room id for particular journey assigned to a driver 

dbManager.findroom=function (user, cb) {
      con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT roomid FROM journey WHERE driver = '"+user+"'", function (err, res) {
            if (err) cb(err, null);
            cb(null, res);
          });
       });
};

module.exports = dbManager;
