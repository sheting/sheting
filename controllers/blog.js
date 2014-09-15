var blogModel = require('../models/blog_model');

exports.doPost = function(req, res){
    var title = req.body.title;
    var tags = req.body.tags;
    var content = req.body.content;
    var username = req.body.username;
    var reg = /[-\/、\.+]/;
    if(title.length == 0){
        req.flash('error','请输入标题！');
        return res.redirect("/post");
    }
    if(reg.test(tags)){
        req.flash('error','标签含有不合法字符，请重新输入！');
        return res.redirect("/post");
    }
    if(password != rePassword){
        req.flash('error','两次密码不一致');
        return res.redirect("/signup");//redirect 是get方式跳转
    }
    blogModel.save({
        title: title,
        tags: tags,
        content:content,
        username:username
    }, function(blog){
        if(blog){
            req.flash('success', '发布成功，点击首页查看!');

        }else{
            req.flash('error', '发布失败，请再次输入!');
        }
        return res.redirect('/post');
    });
};