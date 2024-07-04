//Import express, http and socket.io
const express = require('express'),
    http = require('http'),
    socketIO = require('socket.io');
//assign express to app
const app = express();

//Request all client resources over static path
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'client')))

//set http-server and listen
let server = http.Server(app);
//set port to 5000
let port = 5000;
server.listen(port);
//message on which port the server is running
console.log(`server running on port ${port}!`)
//set socket io
let io = socketIO(server);
//TASK: emit to client over channel message.sent
io.on('connection', function (socket) {
    socket.on('message.send', function (data) {//??
        io.emit('message.sent', data);//??
    });//??
});

