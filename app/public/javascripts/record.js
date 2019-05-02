var counter=0;
var listOfRecorders = {};
var recorder="";
var id=-1;
$(document).ready(function () {
        
    var localvideos= document.getElementById("local");
    
    connection.onstream = function(event) {
        
            var isInitiator = connection.isInitiator;                
            recorder = RecordRTC(event.stream, {
                type: 'audio',
                recorderType: MediaStreamRecorder
            });
            
            // If I am the driver
            if (isInitiator === true ) {
                
                document.getElementById("btnStartRecording").style.visibility = "visible";
                document.getElementById("btnStopRecording").style.visibility = "visible";
                document.getElementById("btnStopRecording").disabled=true;
                document.getElementById("btnStartRecording").disabled=false;
            }	
    };

    document.getElementById("btnStartRecording").onclick=function(){

        counter++;
        this.disabled=true;
        document.getElementById("btnStopRecording").disabled=false;
        recorder.startRecording();
        listOfRecorders[counter] = recorder;
    };

    document.getElementById("btnStopRecording").onclick = function() {

        var recordertobestopped = listOfRecorders[counter];
        document.getElementById("btnStopRecording").disabled=true;
        document.getElementById("btnStartRecording").disabled=false;
        var numberOfUsersInTheRoom = connection.getAllParticipants().length;
        
        recordertobestopped.stopRecording(function() {
            
            var blob = recorder.getBlob();
            var url = URL.createObjectURL(blob);
            
            $.ajax(
                { url: "/vn/addvn", 
                method: "POST",
                async:false,
                data: {
                    username:document.getElementById("username").innerHTML,
                    url:url
                },
                success: function(resp) {
                    id=resp;
                }
            });

            var li = document.createElement('li'),
            mt = document.createElement('audio'),
            source= document.createElement('source'),
            hf = document.createElement('a'),
            btn=document.createElement('button'),
            listenerno = document.createElement('a');

            mt.id="myAudio"+id;
            mt.controls = true;
            source.src = url;
            mt.append(source);
            hf.href = url;
            hf.innerHTML = numberOfUsersInTheRoom+" client(s) received voice note";
            listenerno.id="listeners"+id;
            btn.className="fa fa-file-audio-o btn btn-success btn-lg";
            btn.id=id;
            btn.onclick=function(){
                var buttonid=this.id;
                $.ajax(
                    { url: "/vn/retrievelisteners", 
                    method: "GET",
                    async:false,
                    data: {
                        id:buttonid
                    },
                    success: function(resp) {
                        document.getElementById("listeners"+buttonid).innerHTML=resp[0].count;
                    }
                });

            }

            li.appendChild(mt);
            li.appendChild(hf);
            li.appendChild(btn);
            li.appendChild(listenerno);
            localvideos.appendChild(li);

            connection.send(url);
        });
    }; 

});

