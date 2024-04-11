/*
School Server
*/
let express = require("express");
const path = require("path");
const fs = require("fs");
let app = express();
const port = process.env.PORT || 3000;

const index = app.listen(port);
console.log(`Running at Port ${port}`);
index.timeout = 1000 * 60 * 2; // 2 minutes

//Allow CORS-Request and set the default Content-Type
app.use(function (req, res, next) {
//??
//??
//??
//??
});

//set daten path
//??

//add location routes
//??


