
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosetest');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);

app.set('views', path.join(__dirname, 'views'));//设置views文件夹路径
app.set('view engine', 'html');//设置页面渲染引擎
app.engine('.html', require('ejs').__express);//同上
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

routes(app);
