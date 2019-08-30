// const sinespApi = require('sinesp-api');
// const express = require('express');

// const server = express();

// server.get('/', async (req, res) => {
// 	// const result = await sinespApi.search(req.plate);

// 	return res.sendStatus(123);
// });

// server.listen(3333);

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Olá Mundo!');
});

app.listen(3333, function() {
	console.log('App de Exemplo escutando na porta 3000!');
});
