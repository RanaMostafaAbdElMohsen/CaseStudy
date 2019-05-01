var journey = require('../models/ModelJourney.js');
var dbManager=require('../database/db.js');


journey.findroomid=function(request,resp){
    var driver_username= request.query.username;
    console.log(driver_username);
    dbManager.findroom(driver_username, function(req,res){
        if (req =="err")
            console.log("Error has occurred in database while findiing list ");
        else
            console.log(res)
            resp.send(res);
    })
};

module.exports = journey;