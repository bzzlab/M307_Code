//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//add directory data
//??

app.listen(port);
console.log(`Running at Port ${port}`);

//add part of api-path to router
//??
//send data when requesting /api/students
router.get('/students', (req,res) =>{
    res.send(studentsData);
});
//send data when requesting /api/student/<student-ID>
//??
//??
//??
//??
//??
//??
//??
