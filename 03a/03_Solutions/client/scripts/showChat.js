let socket = io('http://localhost:4000');//??
socket.on('greeting-from-server', function (message) {
    let el = document.createElement("p");//??
    let content =document.createTextNode(message.greeting);//??
    el.appendChild(content);//??
    document.body.appendChild(el);//??
    socket.emit('greeting-from-client', {//??
        greeting: `Hello Server`//??
    });//??
});

