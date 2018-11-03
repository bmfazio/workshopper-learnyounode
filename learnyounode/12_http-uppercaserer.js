//learnyounode-12

var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
	if(req.method === 'POST'){
		req.pipe(map((chunk) => {
			return chunk.toString().toUpperCase();
		})).pipe(res);
		
/*
algunos intentos previos:


		req.pipe(map((chunk) => {
			return chunk.toString().toUpperCase();
		})).pipe((res) => {console.log(res)});


		req.on('data', (chunk) => {
			console.log(chunk);
		});
		req.on('end', () => {
			console.log(':>');
		});
*/
	}

});

server.listen(process.argv[2]);

/* un intento raro sin ayuda de paquetes

		let body = ''
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			req.pipe(body.toUpperCase());
		});
		
		

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