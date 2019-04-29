$(document).ready(function () {

        var counter=0;
        var connection = new RTCMultiConnection();

        // this line is VERY_important
        connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

        connection.sdpmandatory={
        'OfferToReceiveAudio':true,
        'OfferToReceiveVideo':false
        }

        connection.session = {
            audio: true,
            video: false,
            data: true
        };

        connection.mediaConstraints = {
            audio: true,
            video: false,
            data: true
        };

        var localvideos= document.getElementById("local");
        var remotevideos=document.getElementById("remote");
        var listOfRecorders = {};
        var recorder="";
        var roomid=document.getElementById("room");
        roomid.value=connection.token();



        document.getElementById("openorjoin").onclick=function(){
        this.disabled=true;
        connection.openOrJoin(roomid.value);
        };

        connection.onstream = function(event) {
            
            var isInitiator = connection.isInitiator;
                
            recorder = RecordRTC(event.stream, {
                type: 'audio',
                recorderType: MediaStreamRecorder
            });
            
            if (isInitiator === true ) {
                // initiator's own stream
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


        connection.onmessage = function(event) {
            alert(event.data);
            var url = event.data,
            li = document.createElement('li'),
            mt = document.createElement('audio'),
            hf = document.createElement('a');

            mt.controls = true;
            mt.src = url;
            hf.href = url;
            hf.download = `${counter}${'.ogg'}`;
            hf.innerHTML = `${hf.download}`;
            li.appendChild(mt);
            li.appendChild(hf);
            remotevideos.appendChild(li);
        };

        document.getElementById("btnStopRecording").onclick = function() {
            
            var recorder = listOfRecorders[counter];
            recorder.stopRecording(function() {
                
                var blob = recorder.getBlob();
                var url = URL.createObjectURL(blob),
                li = document.createElement('li'),
                mt = document.createElement('audio'),
                hf = document.createElement('a');
                
                mt.controls = true;
                mt.src = url;
                hf.href = url;
                hf.download = `${counter}${'.ogg'}`;
                hf.innerHTML = `${hf.download}`;
                li.appendChild(mt);
                li.appendChild(hf);
                localvideos.appendChild(li);
                connection.send(url);
            });

            document.getElementById("btnStopRecording").disabled=true;
            document.getElementById("btnStartRecording").disabled=false;
            var numberOfUsersInTheRoom = connection.getAllParticipants().length;
            alert("sent to the clients connected on journey and "+ numberOfUsersInTheRoom+ 
            " person / people received voice note");
        };
});