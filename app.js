var port = process.env.PORT || 3000;

var express = require('express');
var ejsLayouts = require("express-ejs-layouts");
var path = require('path');
require('dotenv').config();
// var favicon = require('serve-favicon');
var nodemailer = require("nodemailer");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(__dirname + '/static'));
app.use(ejsLayouts);
app.set('layout', 'layouts/default');

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
if (app.get('env') === 'development') {
  // development error handler
  // will print stacktrace
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: 'An error occurred',
      error: {}
    });
  });
}


var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port );
});

module.exports = app;
