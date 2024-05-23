const path = require("path");
const fs = require("fs");
const express = require("express");

module.exports = (app) => {//??

    const router = express.Router();
    //set router for /api/v2
    app.use('/api/v2', router);//??

    //professionList from client
    const professionList = ["Applikationsentwickler", "IMS",//??
        "Mediamatiker", "Recyclist", "Detailhandel", "Kaufmann"];//??

    /**
     * /general/profession/<index>: returns profession from the professionList
     * based on the index. If index exceeds boundaries, then return -1.
     */
    router.get('/general/professions', (req, res) => {
        res.status(200).send(JSON.stringify(professionList));//??
    });
}//??
