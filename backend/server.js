var express = require("express");
var http = require("http");
var cors = require("cors");
require('dotenv').config();
var mongoose = require('mongoose');
var authenticationRoutes = require("./routes/authenticationRoutes");

const port = process.env.APP_PORT;

var app = express();
app.use(express.json());
app.use(cors());
app.use('/api/authentication',authenticationRoutes);

var server = http.createServer(app);

async function startServer(){
    try{
        server.listen(port);
        console.log(`Server ready at ${port}`);
    } catch(e){
        console.error(e);
    }
}

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    startServer();  
})
.catch(err => {
    console.log("Database connection failed.")
    console.error(err);
})
