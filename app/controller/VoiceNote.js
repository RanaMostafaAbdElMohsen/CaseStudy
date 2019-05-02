var vn= require('../models/ModelVoiceNote.js');
var dbManager=require('../database/db.js');


vn.addvn=function(request,resp){
    var driver_username= request.body.username;
    var url=request.body.url;
    dbManager.addvoicenote(driver_username, url,function(req,res){
        if (req =="err")
            console.log("Error has occurred in database");
        else{
            resp.send(res);
        }
    })
};

vn.addplayedvn=function(request,resp){
    var cust_username= request.body.username;
    var url= request.body.url;
    dbManager.addplayedvn(cust_username, url,function(req,res){
        if (req =="err")
            console.log("Error has occurred in database");
        else{
            resp.send(res);
        }
    })
};

vn.listened=function(request,resp){
    var cust_username= request.body.username;
    var id= request.body.id;
    dbManager.listened(cust_username, id,function(req,res){
        if (req =="err")
            console.log("Error has occurred in database");
        else{
            resp.send(res);
        }
    })
};

vn.retrievelisteners=function(request,resp){
    var id= request.query.id;
    dbManager.retrievelisteners( id,function(req,res){
        if (req =="err")
            console.log("Error has occurred in database");
        else{
            resp.send(res);
        }
    })
};


module.exports = vn;