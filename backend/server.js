var express = require("express");
var http = require("http");
var cors = require("cors");
require('dotenv').config();
var mongoose = require('mongoose');
var authenticationRoutes = require("./routes/authenticationRoutes");
var friendInvitationRoutes = require("./routes/friendInvitationRoutes");
var socketServer = require("./socketServer");
const logger = require("./logging/loggerConfig");

const port = process.env.APP_PORT;

var app = express();
app.use(express.json());
app.use(cors());
app.use('/api/authentication',authenticationRoutes);
app.use('/api/friend-invitation',friendInvitationRoutes);

var server = http.createServer(app);
socketServer.registerSocketServer(server);

async function startServer(){
    try{
        server.listen(port);
        logger.info("Server started");
        console.log(`Server ready at ${port}`);
    } catch(e){
        logger.error("server down");
        console.error(e);
    }
}

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    logger.info("Database connection established.");
    startServer();  
})
.catch(err => {
    logger.error("Database connection failed.");
    console.log("Database connection failed.")
    console.error(err);
})
