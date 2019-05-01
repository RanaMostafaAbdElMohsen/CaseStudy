$(document).ready(function () {

    // Finding room id from database for this particular driver
    var roomid="";
    var username=document.getElementById("username").innerHTML;
    $.ajax(
            { url: "/journey/findroomid", 
            method: "GET",
            data: {username:username},
            async: false,
            success: function(resp) {
            roomid=resp[0].roomid;
            }
        });

    document.getElementById("room").value=roomid;

    // Opening or Joining the room
    document.getElementById("open").onclick=function(){
        this.disabled=true;
        this.innerHTML="Opened Room";
        connection.openOrJoin(roomid.value); 
    };
    
});