//learnyounode-08
var http = require('http');
//var bl = require('bl');
const inUrl = process.argv[2];

http.get(inUrl, function(res) {
	
//	res.setEncoding('utf8'); // aparentemente lo coerciona al pegar string?

	var fullres = '';	

	res.on('data', function(data) {
		fullres = fullres + data;
	});

	res.on('end', function(data) {
		console.log(fullres.length);
		console.log(fullres);
	});	
});


/*
http.get(inUrl,
	function(res) {
		res.pipe(bl(function(err, data){
			if(err){return console.log(err);}
			var outie = data.toString();
			console.log(outie.length);
			console.log(outie);
		}));
});
*/