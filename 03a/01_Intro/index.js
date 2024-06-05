//Import express, http and socket.io
const express = require('express'),//??
    http = require('http'),//??
    socketIO = require('socket.io');//??
//assign express to app
const app = express();//??
//Request client with /
app.get('/', function (req, res) {
    //send index.html to the client
    res.sendFile(__dirname + '/client/index.html');//??
});
//set http-server and listen
let server = http.Server(app);//??
//set port to 5000
let port = 5000;//??
server.listen(port);//??
console.log(`server running on port ${port}!`)
//set socket io
let io = socketIO(server);//??
//connect to client ...
io.on('connection', function (socket) {//??
    //emit message to client
    socket.emit('greeting-from-server', {//??
        greeting: 'Hello Client'//??
    });//??
    //listen to message from client
    socket.on('greeting-from-client', function (message) {//??
        console.log(message);//??
    });//??
});//??
