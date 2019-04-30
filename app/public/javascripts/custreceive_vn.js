var counter=0;
$(document).ready(function () {
    
    var remotevideos=document.getElementById("remote");

    connection.onmessage = function(event) {
        counter++;
        var url = event.data,
        li = document.createElement('li'),
        mt = document.createElement('audio'),
        source= document.createElement('source'),
        hf = document.createElement('a');           
        mt.id="myAudio";
        mt.controls = true;
        source.src = url;
        mt.append(source);
        hf.href = url;
        hf.download = `${counter}${'.ogg'}`;
        hf.innerHTML = `${hf.download}`;
        li.appendChild(mt);
        li.appendChild(hf);
        remotevideos.appendChild(li);
        document.getElementById("myAudio").addEventListener('play',function() { alert('it is playing'); });
    };
  
});