const express = require("express");
const route = require('./Router/route');

const app = express();

const port = process.env.PORT || 5000

app.use('/price', route);

app.use((req, res) =>{
    res.json({"message" : "404 Not Found"});
});

app.listen(port, () =>{
    console.log(`Server is running successfully on port ${port}`)
})