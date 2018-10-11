var fs = require('fs');
var path = require('path');

module.exports = function (dirname, fileext, callfun) {
	
	var ext = '.' + fileext;
	var arr = new Array ();
	
	fs.readdir(dirname, function(err, files) {
		if (err){return callfun(err);}
		files.forEach(function (file) {
			if(path.extname(file) == ext) {
				arr.push(file);
			}
		})
		callfun(err, arr);
	});
}