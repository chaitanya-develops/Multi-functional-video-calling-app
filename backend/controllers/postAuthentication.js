const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../logging/loggerConfig');


const loginPost = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });
        if( user && (await bcrypt.compare(password, user.password))){
            var token = jwt.sign(
                {
                    userId: user._id,
                    email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            logger.info("Login succesfull");
            res.status(201).json({
                userDetails: {
                    username: user.username,
                    email: user.email,
                    token: token,
                    _id: user._id,
                },
            });
            return;
        }
        logger.error("Invalid Credentials");
        return res.status(400).send('Invalid Credentials');
    } catch (error) {
        logger.error(error);
        return res.status(500).send('Try again');
    }
};


const registerPost = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.exists({email: email.toLowerCase() });
        if(userExists){
            logger.error("User already exists");
            return res.status(409).send('E-mail already in use.');
        }
        var encryptedPassword = await bcrypt.hash(password,16);
        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        var token = jwt.sign(
            {
                userId: user._id,
                email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        logger.info("Registration successfull")
        res.status(201).json({
            userDetails: {
                username: user.username,
                email: user.email,
                token: token,
                _id: user._id,
            },
        });
    } catch (error) {
        logger.error("Registration failed.");
        console.error(error);
        return res.status(500).send("Try again!");
        
    }
};

exports.controllers = {
    loginPost,
    registerPost,
}