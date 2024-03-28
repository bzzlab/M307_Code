/*
Aufgabe 4: Bilder ausgeben (server04.js)
Schreiben Sie das Beispiel 03b_server.js so um,
dass die Bilder aus dem images-Verzeichnis (statt aus dem img-Verzeichnis)
ausgegeben werden. Ferner soll der lokale Server auf Port 4000 laufen
dem Testclient Postman oder einem gewöhnlichen Browser bei HTTP-Requests
die entsprechende HTTP-Response zurückgibt:

HTTP-Request: GET /bild/1
HTTP-Response: das Bild 01a.jpg wird gezeigt
..
HTTP-Request: GET /bild/3
HTTP-Response: das Bild 02.jpg wird gezeigt

HTTP-Request: GET /bild/6 oder grösser
HTTP-Response: Dieses Bild wurde nicht gefunden!
*/


//Add module express and assign to app
const express = require('express');//??
const app     = express();//??
//Add port 4000, listen and write message on the console
const port = process.env.PORT || 4000;//??
app.listen(port);//??
console.log(`Running at Port ${port}`);//??
//Add module path and join __dirname it with img-path
const path = require('path');//??
const bilder_verzeichnis = path.join(__dirname, 'img');//??

app.get('/bild/:id', function(req, res) {//??
    //get id
    const id = req.params.id;//??
    //if id > 5 then ...
    if (parseInt(id) > 5){ //??
        //.. send message: Dieses Bild wurde nicht gefunden!
        res.send("Dieses Bild wurde nicht gefunden!");//??
    } else { //??
        //.. else compose and send bild-File based on the id
        const bild = `pic0${id}.jpg`;//??
        res.sendFile(path.join(bilder_verzeichnis, bild));//??
    }//??
});//??
