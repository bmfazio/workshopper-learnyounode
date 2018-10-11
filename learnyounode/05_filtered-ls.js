//learnyounode-05
var fs = require('fs');
var dirname = process.argv[2];
var fileext = process.argv[3];

fs.readdir(dirname, function listo(err, list) {
	for (var i = 0; i < list.length; i++) {
		var archinombre = list[i].split('.')
		if(archinombre[archinombre.length-1] == fileext & list[i].indexOf('.') > -1) {
			console.log(list[i]);
		}
	}
});
