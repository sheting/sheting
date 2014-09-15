
/*
 * GET home page.
 */
var welcome = require('./controllers/welcome');
var user = require('./controllers/user');
var blog = require('./controllers/blog');

module.exports = function(app){
    app.get('/', welcome.index);
    app.get('/music1', welcome.music);
    app.get('/picture', welcome.picture);
    app.get('/blog', welcome.blog);
    app.get('/signin',welcome.signin);
    app.get('/signup',welcome.signup);
    app.get('/post',welcome.post);
    app.get('/postIFrame',welcome.postIFrame);

    app.post('/signup', user.doSignup);
    app.post('/signin', user.doSignin);
    app.post('/doPost', blog.doPost);

};