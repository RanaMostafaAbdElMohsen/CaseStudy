var driver = require('../models/Modeldriver.js');
var dbManager=require('../database/db.js');


driver.signin=function(request,resp){

    var driv_username= request.query.username;
    var driv_password= request.query.password;

    dbManager.drivsignin(driv_username,driv_password, function(req,res){
        if (req =="err")
            console.log("Error has occurred in database while findiing list ");
        else
            resp.send(res);
            console.log(res);
    })
};

module.exports = driver;