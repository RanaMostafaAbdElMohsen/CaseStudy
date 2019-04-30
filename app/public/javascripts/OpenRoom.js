$(document).ready(function () {

    var roomid=document.getElementById("room");
    roomid.value=connection.token();

    // Opening or Joining the room
    document.getElementById("open").onclick=function(){
        this.disabled=true;
        this.innerHTML="Opened Room";
        connection.openOrJoin(roomid.value); 
    };
    
});