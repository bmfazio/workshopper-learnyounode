//learnyounode-01
//console.log('HELLO WORLD');

//learnyounode-02
	// v1
//console.log(process.argv)
	// v2
//var arguis = process.argv;
//var total = 0;
//for (var i = 2; i < arguis.length; i++) {
//	total = total + Number(arguis[i]);
//}
//console.log(total)

//learnyounode-03
//var fs = require('fs');
//var archivin = fs.readFileSync(process.argv[2]).toString();
//console.log(archivin.split('\n').length-1);

//learnyounode-04
//var nl = undefined;
//var fs = require('fs');
//function countNL(callback) {
//	fs.readFile(process.argv[2], function listo(err, fileContent) {
//		nl = fileContent.toString().split('\n').length-1;
//		callback();
//	});
//}
//function logOut() {
//	console.log(nl);
//}
//countNL(logOut);

//learnyounode-05
//var fs = require('fs');
//var dirname = process.argv[2];
//var fileext = process.argv[3];
//
//fs.readdir(dirname, function listo(err, list) {
//	for (var i = 0; i < list.length; i++) {
//		var archinombre = list[i].split('.')
//		if(archinombre[archinombre.length-1] == fileext & list[i].indexOf('.') > -1) {
//			console.log(list[i]);
//		}
//	}
//});

//learnyounode-06
//var mymodule = require('./mymodule.js');
//function salida(err, data) {
//	if(err){return console.log(err);}
//	data.forEach(function(x){console.log(x);});
//}
//mymodule(process.argv[2], process.argv[3], salida);

//learnyounode-07
//var http = require('http');
//const inUrl = process.argv[2];
//
//http.get(inUrl, function(res) {
//	res.setEncoding('utf8');
//	res.on("data", function(data) {
//		console.log(data);
//	});
//});

//learnyounode-08
var http = require('http');
var bl = require('bl');
const inUrl = process.argv[2];

http.get(inUrl,
	function(res) {
		res.pipe(bl(function(err, data){
			if(err){return console.log(err);}
			var outie = data.toString();
			console.log(outie.length);
			console.log(outie);
		}));
});

//learnyounode-09

//learnyounode-10

//learnyounode-11

//learnyounode-12

//learnyounode-13