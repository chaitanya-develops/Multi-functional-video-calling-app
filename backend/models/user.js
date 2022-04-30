var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String,unique: true},
    password: {type: String},
});

module.exports = mongoose.model("user",userSchema);