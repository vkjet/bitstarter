var express = require('express');
var fs = require('fs');
var buf = new Buffer('Hello world from index.htm2');

var app = express.createServer(express.logger());

buf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
