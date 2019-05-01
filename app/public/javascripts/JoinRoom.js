$(document).ready(function () {

    var roomid=document.getElementById("room");

    // Opening or Joining the room
    document.getElementById("join").onclick=function(){
        this.disabled=true;
        this.innerHTML="Joined Room"; 
        connection.openOrJoin(roomid.value); 
    };
    
});