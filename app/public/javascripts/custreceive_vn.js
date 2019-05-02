var counter="";

$(document).ready(function () {
    
    var remotevideos=document.getElementById("remote");

    connection.onmessage = function(event) {

        if(document.getElementById("AwaitingBus").innerHTML=="Rode Bus"){
            document.getElementById("AlreadyRode").style.visibility = "visible";
        }
        else{
            var url = event.data;
            // Get from database voice note ID and insert it to played voicenote table
            $.ajax(
                { url: "/vn/addplayedvn", 
                method: "POST",
                data: {
                    username:document.getElementById("username").innerHTML,
                    url:url
                },
                async:false,
                success: function(resp) {
                    counter=resp;
                }
            });
        

            var li = document.createElement('li'),
            mt = document.createElement('audio'),
            source= document.createElement('source'),
            hf = document.createElement('a');           
            mt.id="myAudio"+counter;
            mt.controls = true;
            source.src = url;
            mt.append(source);
            hf.href = url;
            hf.download = `${counter}${'.ogg'}`;
            hf.innerHTML = `${hf.download}`;
            li.appendChild(mt);
            li.appendChild(hf);
            remotevideos.appendChild(li);

            document.getElementById("myAudio"+counter).addEventListener('play',function() { 
                
                $.ajax(
                    { url: "/vn/listenedtovn", 
                    method: "POST",
                    data: {
                        username:document.getElementById("username").innerHTML,
                        id:counter
                    },
                    success: function(resp) {
                    }
                });


            });

        
        };
    }
});