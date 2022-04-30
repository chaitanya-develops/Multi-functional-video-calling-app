var express = require("express");
var http = require("http");
var cors = require("cors");
require('dotenv').config();
var mongoose = require('mongoose');

const port = process.env.APP_PORT;

var app = express();
app.use(express.json());
app.use(cors());

var server = http.createServer(app);

async function startServer(){
    try{
        server.listen(port);
        console.log(`Server ready at ${port}`);
    } catch(e){
        console.error(e);
    }
}

startServer();