/*
 welcome controller
 */

exports.index = function(req, res){
    res.render('index');
};

exports.music = function(req, res){
    res.render('music1');
};
exports.picture = function(req, res){
    res.render('picture');
};
exports.blog = function(req, res){
    res.render('blog');
};


exports.signin = function(req, res){
    res.render('signin',{
        user:null,
        error: req.flash('error').toString()
    });
};
exports.createBlog = function(req,res){
    res.render('createBlog',{
        user:null
    });
};
exports.logout = function(req,res){
    req.session.loginUser = null;
    req.flash('success','登出成功');
    res.redirect('/');
};
exports.signup = function(req, res){
    res.render('signup',{
        user:null,
        error: req.flash('error').toString()
    });
};