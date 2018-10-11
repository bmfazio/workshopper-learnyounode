//learnyounode-02
var arguis = process.argv;
var total = 0;
for (var i = 2; i < arguis.length; i++) {
	total = total + Number(arguis[i]);
}
console.log(total)
