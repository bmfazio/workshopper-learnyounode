//learnyounode-07
var http = require('http');
const inUrl = process.argv[2];

http.get(inUrl, function(res) {
	res.setEncoding('utf8');
	res.on("data", function(data) {
		console.log(data);
	});
});
