let socket = io('http://localhost:5000');
// Send message with username, message
socket.on('message.sent', function (data) {
//??
//??
//??
//??
//??
});


$(document).ready(function () {


    function sendMessage() {
        //TASK: emit message and username over socket message.send
//??
//??
//??
//??
    }

    $('#btn').on('click', function (e) {
        //TASK: freeze page after validation and
        //call function sendMessage when
        //form is valid
//??
//??
//??
//??
//??
//??
    });

    //send message when keys CTRL + RETURN has been pressed
    $('textarea').keyup(function (e) {
        //TASK: freeze page after validation and
        //call function sendMessage when
        //form is valid
//??
//??
//??
//??
//??
//??
//??
//??
    });

    //TASK: validate form for email and message
    //Hint: https://stackoverflow.com/questions/15060292/a-simple-jquery-form-validation-script
    function validateForm() {
//??
//??
//??
//??

//??

//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
    }

});
