$(document).ready(function () {

    var JourneyList="";
    $.ajax(
        { url: "/journey/findjourneys", 
        method: "GET",
        async: false,
        success: function(resp) {
            JourneyList=resp;
        }
    }); 

    for (i=0; i<JourneyList.length;i++)
    {
       var newOption = $('<option/>');
       newOption.html(JourneyList[i].details)
       newOption.attr('value',JourneyList[i].details);
       $('#journeyslist').append(newOption);
    }

    document.getElementById("subscribe").onclick=function(){

        var journeydetail= document.getElementById("journeyslist").value;
        var user=document.getElementById("username").innerHTML;

        $.ajax(
            { url: "/journey/subscribejourney", 
            method: "GET",
            data:{journeydetail:journeydetail,
                username:user
            },
            success: function(resp) {
                document.getElementById("room").value=resp;
                document.getElementById("subscribe").innerHTML="Subscribed!";      
                document.getElementById("broadcast").style.visibility = "visible";
            }
        }); 
    }
});