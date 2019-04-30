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

