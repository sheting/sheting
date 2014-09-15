var userModel = require('../models/user_model');

exports.doSignup = function(req, res){

    //1.接收数据
    var username = req.body.username;
    var password = req.body.password;
    var rePassword = req.body.rePassword;

    userModel.getUser({username:username},function(user){
        if(user){
            req.flash('error',"该用户已存在！");
            return res.redirect('/signup');
        }
    });
    if(password != rePassword){
        req.flash('error','两次密码不一致');
        return res.redirect("/signup");//redirect 是get方式跳转
    }
    userModel.save({
        username: username,
        password: password
    }, function(user){
        if(user){
            req.flash('success','注册成功');
            return res.redirect('/signin');
        }
    });
};
exports.doSignin = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    userModel.getUser({
        username: username,
        password: password
    }, function(user){
        if(!user) {
            req.flash('error', '用户不存在!');
            return res.redirect('/signin');//用户不存在则跳转到登录页
        }
        //检查密码是否一致
        if(user.password != password) {
            req.flash('error', '密码错误!');
            return res.redirect('/signin');//密码错误则跳转到登录页
        }
        //用户名密码都匹配后，将用户信息存入 session
        req.session.loginUser = user;
        req.flash('success', '登陆成功!');
        return res.redirect('/post');//登陆成功后跳转到主页
    });
};
exports.logout = function(req,res){
    req.session.loginUser = null;
    req.flash('success','登出成功');
    res.redirect('/');
};