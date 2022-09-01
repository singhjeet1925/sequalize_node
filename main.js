const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT
const API_URL = process.env.API_URL
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Router = require("./Src/route/route")

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(`/${API_URL}/`, Router);
console.log("api apth is http://localhost:3000/api/v1/....")
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})