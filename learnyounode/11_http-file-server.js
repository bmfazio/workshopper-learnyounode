//learnyounode-11

//Mi idea (incorrecta) original
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	fs.createReadStream(process.argv[3]).pipe(res); // el write estaba de mas
});

server.listen(process.argv[2]);

/*
//Mi idea (incorrecta) original
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	fs.createReadStream(process.argv[3]).pipe(res.write());
});

server.listen(process.argv[2]);

//// ejemplo que copie de interner
var http = require('http')
var fs = require('fs')
 
var port = process.argv[2]
var file = process.argv[3]
 
http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response)
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})

*/