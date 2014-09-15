/**
 * User class
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    addTime: { type: Date, default: Date.now()},
    blog: Array
});

module.exports = User = mongoose.model( 'User', userSchema , 'myuser');
