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
    res.header('Access-Control-Allow-Origin', '*');//??
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');//??
    res.header('Content-Type', 'application/json');//??
    next();//??
});

//set daten path
const staticPath = './data';//??

//set welcome api for testing if the index is running and responding a basic request
app.get('/welcome', (req, res) => {
    let fileLoc = path.resolve(staticPath + '/welcome.txt');//??
    fs.readFile(fileLoc, 'utf8',//??
        (err, text) => {//??
            res.send(text);//??
        });//??
});

const router = express.Router();
//set router for /api/v1
app.use('/api/v1', router);//??

//set fileLoc for students.json
let fileLoc = path.resolve(staticPath + '/students.json');//??

router.get('/students', (req, res) => {
    fs.readFile(fileLoc, 'utf8', (error, text) => {//??
        if (error) {//??
            console.error(`Error ${error}`);//??
        } else {//??
            try {//??
                const obj = JSON.parse(text);//??
                res.send(JSON.stringify(obj, null, 4));//??
            } catch (e) {//??
                console.error('Invalid JSON in file');//??
            }//??
        }//??
    });//??
});


router.get('/student/:id', (req, res) => {
    const id = req.params.id;//??
    console.log(id);//??
    fs.readFile(fileLoc, 'utf8', (error, text) => {//??
        if (error) {//??
            console.error(`Error ${error}`);//??
        } else {//??
            try {//??
                const data = JSON.parse(text);//??
                let out = data.filter(eintrag => eintrag.student_id === parseInt(id));//??
                res.send(JSON.stringify(out, null, 4));//??
            } catch (e) {//??
                console.error('Invalid JSON in file');//??
            }//??
        }//??
    });//??
});


