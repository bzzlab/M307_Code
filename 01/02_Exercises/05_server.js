/*
Aufgabe 5: Daten zu den Schuhen ausgeben (server05.js)
Ergänzen Sie die Kommentare ??, damit der gestartete
lokale Server auf Port 4000 die Daten aus der Datei cars.json
dem Testclient Postman bei den HTTP-Requests die entsprechenden
HTTP-Responses zurückgibt:

Test:
$ curl -X GET http://localhost:4000/api/shoes
[{"id":1,"model":"Old School","brand":"Vans","Price":"70","sizes":["41","42","43","44","45","46","47"],"individualcolors":["black","wh
....

$ curl -X GET http://localhost:4000/api/shoes/1
[{"id":1,"model":"Old School","brand":"Vans","Price":"70","sizes":["41","42","43","44","45","46","47"],"individualcolors":["black","wh
ite","cream-white"]}]

$ curl -X GET http://localhost:4000/api/shoes/2
[{"id":2,"model":"Air Force 1","brand":"Nike","Price":"120","sizes":["36","36.5","37","38"],"individualcolors":["black","white","pink"
,"türkis","Rot"]}]
...
$ curl -X GET http://localhost:4000/api/shoes/6
Keine Daten zum Schuh mit ID=6 gefunden!


*/

//Add module
//??
//Important: DO NOT FORGET round braces!
//??
//??
//??
//listen to port and show message that server is running
//??
//??

//import shoes daten
//??

//??
//request without id ..
//??
    //then send all daten
//??
//??
//request with id ..
//??
    //then read id
//??
    //filter entry by id and assign result to shoe
//??
    //if shoe is empty
//??
        //then send message: Keine Daten ...
//??
//??
        //else send shoe entry
//??
//??
//??
