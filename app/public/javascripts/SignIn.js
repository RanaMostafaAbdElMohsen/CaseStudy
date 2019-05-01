
$(document).ready(function () {

    document.getElementById("signin").onclick=function(){
       
        var user=document.getElementById("inputUsername").value;
        var pass=document.getElementById("inputPassword").value;
        var type= document.getElementById("TypeSelect").value;

        var url_link="/customer/signin";

        if (type=="driver"){
            url_link="/driver/signin";
        }
        var exists=true;

        $.ajax(
            { url: url_link, 
            method: "GET",
            data: {username:user,
            password:pass},
            async: false,
            success: function(resp) {
                if (resp.length==0){
                    document.getElementById("alert").style.visibility = "visible";
                    exists=false;
                    wait(3000);
                }
            }
        });

        if(exists){
            if (type=="driver"){
                window.location="/driver";
                return false;
            }
            else{
                window.location="/customer";
                return false;
            }
        }
    };
});