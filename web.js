var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var output = fs.readFileSync('index.html', 'utf8');


app.get('/', function(request, response) {
  response.send(output);
});

//buf = new Buffer(256);
//len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));
var output = fs.readFileSync('index.html','utf8');
console.log(output);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
