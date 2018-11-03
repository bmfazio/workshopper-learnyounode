//learnyounode-07
var http = require('http');
//const inUrl = 'http://raw.githubusercontent.com/bmfazio/blog-hugo/master/config.toml';
const inUrl = process.argv[2];

http.get(inUrl, function(res) {
//	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});

//console.log(a.__proto__.constructor);