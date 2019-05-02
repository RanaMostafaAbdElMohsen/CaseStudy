$(document).ready(function () {

    document.getElementById("AwaitingBus").onclick=function(){

        this.innerHTML="Rode Bus";
        this.className="btn btn-success";
        document.getElementById("rodebusmsg").style.visibility="visible";

        $.ajax(
            { url: "/journey/updatecuststatus", 
            method: "POST",
            data: {username:document.getElementById("username").innerHTML,
             roomid:document.getElementById("room").value
             },
            success: function(resp) {
            }
        });

    };

});