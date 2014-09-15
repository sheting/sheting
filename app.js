//
///**
// * Module dependencies.
// */
//
var express = require('express');
var http = require('http');
var path = require('path');
var flash = require('connect-flash');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sheting');



var app = express();

// view engine setup
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');//设置页面渲染引擎
app.engine('.html', require('ejs').__express);//同上
app.use(flash());
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.session({
    secret: "1234567890"
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

//develope only
if ('development' == app.get('env')) {//开发模式下使用
    app.use(express.errorHandler());
}



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
routes(app);

