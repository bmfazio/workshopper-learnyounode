//learnyounode-04
var nl = undefined;
var fs = require('fs');
function countNL(callback) {
	fs.readFile(process.argv[2], function listo(err, fileContent) {
		nl = fileContent.toString().split('\n').length-1;
		callback();
	});
}
function logOut() {
	console.log(nl);
}
countNL(logOut);
