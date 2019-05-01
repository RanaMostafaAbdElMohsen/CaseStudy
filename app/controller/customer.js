var customer = require('../models/ModelCustomer.js');
var dbManager=require('../database/db.js');


customer.signin=function(request,resp){

    var cust_username= request.query.username;
    var cust_password= request.query.password;

    dbManager.custsignin(cust_username,cust_password, function(req,res){
        if (req =="err")
            console.log("Error has occurred in database while findiing list ");
        else
            resp.send(res);
            console.log(res);
    })
};

module.exports = customer;