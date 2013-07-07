var express = require('express');
var fs = require('fs');
buf = new Buffer(fs.readFileSync('index.html', 'utf-8'));

Var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

Var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
