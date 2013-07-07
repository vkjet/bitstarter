var express = require('express');
var fs = require('fs');
var buf = new Buffer(1024);

var app = express.createServer(express.logger());

len = buf.write(fs.readFileSync('index.html', 'utf-8'));

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8', 0, len));
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
