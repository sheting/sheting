
var Blog = require('./blog');

exports.save = function(blog, callback){
    blog = new Blog(blog);
    blog.save(function(err, doc){
        if(!err){
            callback(doc);
        }
    });
};

exports.getBlog = function(blog, callback){
    Blog.findOne(blog, function(err, doc){
        if(!err){
            callback(doc);
        }
    });
};