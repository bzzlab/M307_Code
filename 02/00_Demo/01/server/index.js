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

//set welcome api for testing if the index is running and responding a basic request
app.get('/welcome', (req, res) => {
//??
//??
//??
//??
//??
});

const router = express.Router();
//set router for /api/v1
//??

//set fileLoc for students.json
//??

router.get('/students', (req, res) => {
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
});


router.get('/student/:id', (req, res) => {
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
});


