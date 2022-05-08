var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String,unique: true},
    password: {type: String},
    friends: [{type: Schema.Types.Object, ref: 'User'}],
});

module.exports = mongoose.model("user",userSchema);