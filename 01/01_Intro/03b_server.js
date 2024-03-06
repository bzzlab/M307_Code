//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Running at Port ${port}`);

//add module path
const path = require('path');//??
//connect root path with img path
const bilder = path.join(__dirname, 'img');//??

//API bild with id as parameter
app.get('/bild/:id', function(req, res) {//??
    //const id = `0${req.params.id}.jpg`;//??
    res.sendFile(path.join(bilder, id));//??
});//??
