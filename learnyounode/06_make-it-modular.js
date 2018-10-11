//learnyounode-06
var mymodule = require('./mymodule.js');
function salida(err, data) {
	if(err){return console.log(err);}
	data.forEach(function(x){console.log(x);});
}
mymodule(process.argv[2], process.argv[3], salida);
