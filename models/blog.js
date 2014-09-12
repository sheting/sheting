var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    email: String,
    addTime: { type: Date, default: Date.now()}
});


module.exports = Blog = mongoose.model( 'Blog', userSchema , 'myBlog');