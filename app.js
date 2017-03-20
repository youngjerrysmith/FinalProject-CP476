var express = require('express');
var path = require('path');
var routes = require('./api/routes');
var app = express();

var expressPort = 3000;

app.set('port', expressPort);

// order is important. This means that if we move this function below the
//  static call there wont be any output
app.use(function(req, res, next) {
  console.log(req.method, req.url); // simple logger
  next();
});

// tell express that public is static.
//  Express checks first if the route is in the
//  static folder. It will deliver that data directly
//  to the browser without any extra routes.
// Essentially it provides similar use as XAMPP or
// any other typical server.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

/* NOTE: only hear for example. not needed..
// request (req) and response (res)
app.get('/', function(req, res) {
  console.log("GET the homepage");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

/* This is an old way. It is the way to do routing
without express essentially.
app.get('/json', function(req, res) {
  console.log("GET json");
  res
    .status(200)
    .json({"jsonData" : true});
});

app.get('/file', function(req, res) {
  console.log("GET file");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});*/

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server listening on port ' + port);
});
