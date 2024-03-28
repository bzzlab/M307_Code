/*
Aufgabe 5: Daten zu den Schuhen ausgeben (server05.js)
Ergänzen Sie die Kommentare ??, damit der gestartete
lokale Server auf Port 4000 die Daten aus der Datei shoes.json
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
const express = require('express');//??
//Important: DO NOT FORGET round braces!
const app     = express();//??
const router = express.Router();//??
const port = process.env.PORT || 4000;//??
//listen to port and show message that server is running
app.listen(port);//??
console.log(`Running at Port ${port}`);//??

//import shoes daten
const data = require('./data/shoes.json');//??

app.use('/api', router);//??
//request without id ..
router.get('/shoes', (req,res) =>{//??
    //then send all daten
    res.send(data);//??
});//??


/**
 * Send all shoes that matches the provided size as parameter
 * when requesting /api/shoes/sizes/:value
 */
router.get('/shoes/sizes/:value', (req,res) =>{//??
    //parse query parameter
    const size = req.params.value;//??
    //filter entry by id and assign result to shoe
    const article = data.filter(eintrag => {//??
        return eintrag.sizes.includes(size)//??
    });//??
    //if article is empty
    if (article.length===0){//??
        //then send message: Keine Daten ...
        res.send(`Keine Schuhe mit Grösse ${size}!`);//??
    } else {//??
        //else send article entry
        res.send(article);//??
    }//??
});//??

/**
 * Send all shoes that are equal or lower as the provided price
 * when requesting /api/price/lower/<price>
 */
router.get('/shoes/price/lower/:number', (req,res) =>{//??
    //parse query parameter
    const price = parseInt(req.params.number);//??
    // Variante 1:
    const article = //??
        data.filter(item => parseInt(item.Price) <= price );//??

    // Variante 2:
    // const articles = [];
    // data.forEach(schuh => {
    //     if (parseInt(schuh.Price) <= parseInt(preis)){
    //         articles.push(schuh);
    //     }
    // })
    //if article is empty
    if (article.length===0){//??
        //then send message: Keine Daten ...
        res.send(`Keine günstige Schuhe gleich oder unter ${price} gefunden!`);//??
    } else {//??
        //else send article entry
        res.send(article);//??
    }//??
});//??

/**
 * Send all shoes that matches the provided brand as parameter
 * when requesting /api/shoes/brand/:name
 */
router.get('/shoes/brand/:name', (req,res) =>{//??
    //parse query parameter
    const brand = req.params.name;//??
    //set regex
    const regexp = new RegExp(brand, 'i');//??
    const article = //??
        data.filter(item => regexp.test(item.brand));//??
    if (article.length===0){//??
        //then send message: Keine Daten ...
        res.send(`Keine Schuhe der Marke ${brand} gefunden!`);//??
    } else {//??
        //else send article entry
        res.send(article);//??
    }//??
});//??
