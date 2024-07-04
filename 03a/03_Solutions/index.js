//Import express, http and socket.io
const express = require('express'),//??
    http = require('http'),//??
    socketIO = require('socket.io');//??
//assign express to app
const app = express();//??

//Request all client resources over static path
const path = require('path');//??
app.use('/', express.static(path.join(__dirname, 'client')))//??

//set http-server and listen
let server = http.Server(app);//??
//set port to 4000
let port = 4000;//??
server.listen(port);//??
//message on which port the server is running
console.log(`server running on port ${port}!`)//??
//set socket io
let io = socketIO(server);//??
//connect and ...
io.on('connection', function (socket) {
    //emit message to client
    socket.emit('greeting-from-server', {//??
        greeting: 'Hello Client'//??
    });//??
    //listen to message from client
    socket.on('greeting-from-client', function (message) {//??
        console.log(message);//??
    });//??
});
