var express = require('express');
var app = express();

app.use(express.static('js'));
app.use(express.static('css'));

//Serves all the request which includes /images in the url from Images folder
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var server = app.listen(8080);
console.log("server listening on 8080...");
