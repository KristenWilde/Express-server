// var http = require('http');

// var server = http.createServer(function(request, response) {
//   console.log(request.url)
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello world');
// });

// server.listen(3000, 'localhost');
// console.log('Now listening on port 3000')

var express = require('express'); // returns a function

var app = express();

app.get('/', function(req, res) {
  res.send('this is the home page')
});

app.get('/profile/:id', function(req, res) {
  res.send('You requested a profile with id ' + req.params.id);
})

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html')
})

app.listen(3000);


