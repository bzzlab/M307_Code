let socket = io('http://localhost:5000');
// Send message with username, message
socket.on('message.sent', function (data) {
    $('#messages').prepend(`//??
        <div>//??
        <hr />//??
        <div><strong>${data.username}</strong></div>//??
        <p>${data.message}</p></div>`); //??
});


$(document).ready(function () {


    function sendMessage() {
        //TASK: emit message and username over socket message.send
        socket.emit('message.send', { //??
            message: $('#message').val(),//??
            username: $('#email').val()//??
        });//??
    }

    $('#btn').on('click', function (e) {
        //TASK: freeze page after validation and
        //call function sendMessage when
        //form is valid
        e.preventDefault();//??
        if (!validateForm()) {//??
            console.log(`Invalid form!`)//??
        } else {//??
            sendMessage();//??
        }//??
    });

    //send message when keys CTRL + RETURN has been pressed
    $('textarea').keyup(function (e) {
        //TASK: freeze page after validation and
        //call function sendMessage when
        //form is valid
        e.preventDefault();//??
        if (e.ctrlKey && e.which === 13) {//??
            if (!validateForm()) {//??
                console.log(`Invalid form!`)//??
            } else {//??
                sendMessage();//??
            }//??
        }//??
    });

    //TASK: validate form for email and message
    //Hint: https://stackoverflow.com/questions/15060292/a-simple-jquery-form-validation-script
    function validateForm() {
        let inputIsOk = true;//??
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;//??
        let email = $('#email').val();//??
        let message = $('#message').val();//??

        $('.error').hide();//??

        if (email === "") {//??
            $('#email')//??
                .after('<span class="error">' +//??
                    'Please enter your email address</span>');//??
            inputIsOk = false;//??
            console.log(`email is empty!`)//??
        } else if (!emailReg.test(email)) {//??
            $('#email').after('<span class="error"> ' +//??
                'Please enter a valid email address!</span>');//??
            inputIsOk = false;//??
        } else if (message === "") {//??
            $('#message').after('<span class="error">' +//??
                'Please enter your a message!</span>');//??
            inputIsOk = false;//??
        }//??
        return inputIsOk;//??
    }

});
