var express = require("express");
var app = express();
var path = require('path');
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
