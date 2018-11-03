//learnyounode-09
var http = require('http');

const inUrl1 = process.argv[2];
const inUrl2 = process.argv[3];
const inUrl3 = process.argv[4];

let respo2 = '';
let print2 = 0;
let respo3 = '';
let print3 = 0;

const prinf1 = function(res) {
	console.log(res);
}

const prinf2 = function(res, isthis) {
	print2 = print2 + 1;
	
	if(isthis){
		respo2 = res;
	}
	if(print2 > 1){
		console.log(respo2);
	}
}

const prinf3 = function(res, isthis) {
	print3 = print3 + 1;
	
	if(isthis){
		respo3 = res;
	}
	if(print3 > 2){
		console.log(respo3);
	}
}

http.get(inUrl1, function(res) {
	var fullres = '';	
	res.on('data', function(data) {
		fullres = fullres + data;
	});
	res.on('end', function(data) {
		prinf1(fullres);
		prinf2('', false);
		prinf3('', false);
	});	
});

http.get(inUrl2, function(res) {
	var fullres = '';	
	res.on('data', function(data) {
		fullres = fullres + data;
	});
	res.on('end', function(data) {
		prinf2(fullres, true);
		prinf3('', false);
	});	
});

http.get(inUrl3, function(res) {
	var fullres = '';	
	res.on('data', function(data) {
		fullres = fullres + data;
	});
	res.on('end', function(data) {
		prinf3(fullres, true);
	});	
});

