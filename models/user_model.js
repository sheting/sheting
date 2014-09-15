
var User = require('./user');

exports.save = function(user, callback){
    user = new User(user);
    user.save(function(err, doc){
        if(!err){
            callback(doc);
        }
    });
};

exports.getUser = function(user, callback){
    User.findOne(user, function(err, user){
        if(!err){
            callback(user);
        }
    });
};