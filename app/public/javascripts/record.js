// To be changed in database
var counter=0;
var listOfRecorders = {};
var recorder="";
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
            var url = URL.createObjectURL(blob),
            li = document.createElement('li'),
            mt = document.createElement('audio'),
            source= document.createElement('source'),
            hf = document.createElement('a');
            
            mt.id="myAudio";
            mt.controls = true;
            source.src = url;
            mt.append(source);
            hf.href = url;
            hf.innerHTML = numberOfUsersInTheRoom+" client(s) received voice note";
            li.appendChild(mt);
            li.appendChild(hf);
            localvideos.appendChild(li);
            connection.send(url);
        });
    }; 
});