//learnyounode-10
var net = require('net');

function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

function fechoria(socket) {
	var fechat = new Date();
	
	socket.write(fechat.getFullYear() + '-' + padDigits(fechat.getMonth()+1, 2) + '-' + padDigits(fechat.getDate(), 2) + ' ' + padDigits(fechat.getHours(), 2) + ':' + padDigits(fechat.getMinutes(), 2))
	socket.end('\n');
}

var server = net.createServer((socky) => fechoria(socky));

server.listen(process.argv[2]);
