var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {type: String},
    content: String,
    tags: String,
    username: String,
    addTime: { type: Date, default: Date.now()}
});


module.exports = Blog = mongoose.model( 'Blog', blogSchema , 'myBlog');