const User = require('../models/user')
const bcrypt = require('bcryptjs');


const loginPost = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });
        if( user && (await bcrypt.compare(password, user.password))){
            res.status(201).json({
                userDetails: {
                    username: user.username,
                    email: user.email,
                },
            });
            return;
        }
        return res.status(400).send('Invalid Credentials');
    } catch (error) {
        return res.status(500).send('Try again');
    }
};


const registerPost = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.exists({email: email.toLowerCase() });
        if(userExists){
            return res.status(409).send('E-mail already in use.');
        }
        var encryptedPassword = await bcrypt.hash(password,16);
        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        res.status(201).json({
            userDetails: {
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Try again!");
        
    }
};

exports.controllers = {
    loginPost,
    registerPost,
}