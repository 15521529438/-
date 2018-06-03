var express = require('express');
var app = new express();

app.get('/test', function (req,res) {
	res.send({
		data:"hello world"
	})
});

var server = app.listen(3000, function() {
	console.log('server start');
});
module.exports = server;