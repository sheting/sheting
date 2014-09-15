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
exports.post = function(req, res){
    res.render('post',{
        user:req.session.loginUser,
        success:req.flash('success').toString(),
        error: req.flash('error').toString()
    });
};

exports.signin = function(req, res){
    res.render('signin',{
        error: req.flash('error').toString(),
        success: req.flash('success').toString()

    });
};
exports.signup = function(req, res){
    res.render('signup',{
        error: req.flash('error').toString(),
        success: req.flash('success').toString()

    });
};
exports.logout = function(req,res){
    req.session.loginUser = null;
    req.flash('success','登出成功');
    res.redirect('/');
};
exports.postIFrame = function(req,res){
    res.render('postIFrame',{
        user:req.session.loginUser
    });
};