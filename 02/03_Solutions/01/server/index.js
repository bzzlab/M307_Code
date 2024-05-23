/*
Exercise 1:  (client + server)
Read carefully all commented lines and
complete all lines (commented with ??) in order to
run the server on port 4000 and responding all requests
by the HTML-Client.
*/
let express = require("express");
const path = require("path");
const fs = require("fs");
let app = express();
const port = process.env.PORT || 4000;

const index = app.listen(port);
console.log(`Running at Port ${port}`);
index.timeout = 1000 * 60 * 2; // 2 minutes

//Allow CORS-Request and set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//??
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');//??
    res.header('Content-Type', 'application/json');//??
    next();//??
});

//set daten path
const staticPath = './data';//??

//add location of student-api in apis/v1
require("./apis/v1/student-api")(app,staticPath);//??
//add location of general-api in apis/v2
//require("./apis/v2/general-api")(app);//??


