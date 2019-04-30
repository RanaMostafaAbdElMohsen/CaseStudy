$(document).ready(function () {

    var roomid=document.getElementById("room");
    roomid.value=connection.token();

    // Opening or Joining the room
    document.getElementById("join").onclick=function(){
        this.disabled=true;
        this.innerHTML="Joined Room"; 
        connection.openOrJoin(roomid.value); 
    };
    
});