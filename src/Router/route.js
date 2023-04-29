const express = require("express");

const axios = require("axios");

const cheerio = require("cheerio");

const route = express.Router();

route.get('/', async (req, res) =>{
    try {
        const htmlresponse = await axios.get('https://www.metal.com/Lithium-ion-Battery/202303240001');
        const htmlData = cheerio.load(htmlresponse.data);
        const price = htmlData('span.strong___1JlBD').text().trim();
        res.json({price});
    } catch (error) {
        console.error(error);
        res.status(500).json({"error" : "500 Internal Server Error"});
    }
});

module.exports = route;