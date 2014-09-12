
/*
 * GET home page.
 */
var welcome = require('./controllers/welcome');

module.exports = function(app){
    app.get('/', welcome.index);
    app.get('/music1', welcome.music);
    app.get('/picture', welcome.picture);
    app.get('/blog', welcome.blog);

};