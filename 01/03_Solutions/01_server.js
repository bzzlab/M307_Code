/*
Aufgabe 1: Server für Schuh-Produkte
Ergänzen Sie die Kommentare ??, damit der gestartete
lokale Server auf Port 4000 dem Testclient Postman bei
den HTTP-Requests die entsprechenden HTTP-Responses zurückgibt:

HTTP-Request: GET /api/shoes
HTTP-Response:
"Ihre GET-Anfrage: Es sind noch keine Schuhprodukte verfügbar!"

HTTP-Request: POST /api/shoes
HTTP-Response:
"Ihre POST-Anfrage: Es können noch keine Schuhprodukte erzeugt werden!"

$ curl http://localhost:4000/api/shoes
Ihre GET-Anfrage: Es sind noch keine Schuhprodukte verfügbar!
$ curl -X POST http://localhost:4000/api/shoes
Ihre POST-Anfrage: Es können noch keine Schuhprodukte erzeugt werden.
*/

//Add module express and assign to app
const express = require('express');//??
const app     = express();//??
//Add port 4000, listen and write message on the console
const port = process.env.PORT || 4000;//??
app.listen(port);//??
console.log(`Running at Port ${port}`);//??

//Add GET request
app.get('/api/shoes', (req,res) =>{ //??
  res.send(`Ihre ${req.method}-Anfrage: Es sind noch keine Schuhprodukte verfügbar!`);//??
});//??

//Add POST request
app.post('/api/shoes', (req,res) =>{//??
    res.send(`Ihre ${req.method}-Anfrage: Es können noch keine Schuhprodukte erzeugt werden.`);//??
});//??
