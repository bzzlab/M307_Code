const path = require("path");
const fs = require("fs");
const express = require("express");

//??

    app.get('/welcome', (req, res) => {
        let fileLoc = path.resolve(staticPath+'/welcome.txt');
        fs.readFile(fileLoc, 'utf8',
            (err, text) => {
                res.send(text);
            });
    });

    const router = express.Router();
    //set router for /api/v1
//??
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
    });
//??
