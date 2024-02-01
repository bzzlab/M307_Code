/*
Aufgabe 2: Server für Schuh-Produkte mit Rückgabe (server02.js)
Ergänzen Sie die Kommentare ??, damit der gestartete
lokale Server auf Port 4000 dem Testclient Postman bei
den HTTP-Requests die entsprechenden HTTP-Responses zurückgibt:

HTTP-Request: GET /api/shoes
HTTP-Response:
"Ihre GET-Anfrage: Es sind noch keine Schuhprodukte verfügbar!"

HTTP-Request: POST /api/shoes
HTTP-Response:
"Ihre POST-Anfrage: Es können noch keine Schuhprodukte erzeugt werden!"

HTTP-Request: GET /api/v2/shoes
HTTP-Response: Rückgabe des Inhalts aus './daten/cars.json'
*/

/*
Test:
$ curl -X GET http://localhost:4000/api/shoes
Es sind noch keine Schuhprodukte verfügbar!
$ curl -X POST http://localhost:4000/api/shoes
Es können noch keine Schuhprodukte erzeugt werden.
$ curl -X GET http://localhost:4000/api/v2/shoes
[{"model":"Old School","brand":"Vans","Price":"70","sizes":["41","42","43","44","45","46","47"],"individua
lcolors":["black","white","cream-white"]},{"model":"Air Force 1","brand":"Nike","Price":"120","sizes":["36
","36.5","37","38"],"individualcolors":["black","white","pink","türkis","Rot"]},{"model":"Igloo C2","brand
":"Panama Jack","Price":"200","sizes":["35","37","40","44","45","46","47"],"individualcolors":["Dark Leath
er","Bright Leather"]},{"model":"Herrenstiefel 6 Inch","brand":"Timberland","Price":"300","sizes":["45","4
6","47"],"individualcolors":["Bright leather","Dark Leather","Black","White"]},{"model":"Superstar","brand
":"Adidas","Price":"70","sizes":["41","42","43","44","45","46","47"],"individualcolors":["black","white","
red","green","yellow","blue"]}]
 */

//Add module express and assign to app
//??
//??
//Add port 4000, listen and write message on the console
//??
//??
//??

//Set router version 1
//??
//Set router version 2
//??
//Add Data from ./daten/cars.json
//??

//Add GET request for route version 1
//??
//??
//??
//??
//Add POST request for route version 1
//??
//??
//??

//Add POST request for route version 2 - daten are returned to the client
//??
//??
//??
//??
