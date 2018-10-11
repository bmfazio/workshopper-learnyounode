//learnyounode-03
var fs = require('fs');
var archivin = fs.readFileSync(process.argv[2]).toString();
console.log(archivin.split('\n').length-1);
