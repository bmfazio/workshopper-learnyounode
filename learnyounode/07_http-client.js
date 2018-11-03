//learnyounode-07
var http = require('http');
const inUrl = process.argv[2];

http.get(inUrl, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});

// objeto: todo lo que puede ser una variable
// -> propiedades: string, booleano
// -> metodo: funcion del objeto (en realidad tambien es una propiedad!)
// Acceso a propiedades es por medio del '.'