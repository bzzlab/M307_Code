let socket = io('http://localhost:4000');
// Send message with username, message
socket.on('message.sent', function (data) {
    $('#messages').prepend(`
        <div>
        <hr />
        <div><strong>${data.username}</strong></div>
        <p>${data.message}</p></div>`); //??
});


$(document).ready(function () {

    //function sendMessage over message.send
    function sendMessage() {
        socket.emit('message.send', { //??
            message: $('#message').val(),//??
            username: $('#email').val()//??
        });//??
    }

    $('#btn').on('click', function (e) {
        //preventDefault: to freeze page after validation
        e.preventDefault();//??
        sendMessage();//??
    });

    //text
    $('textarea').keyup(function (e) {
        //preventDefault: to freeze page after validation
        e.preventDefault();//??
        if (e.ctrlKey && e.which === 13) {//??
            sendMessage();//??
        }//??
    });
});
