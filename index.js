const express = require('express');
const sinespApi = require('sinesp-api');

const server = express();

server.get('/', async (req, res) => {
	const result = await sinespApi.search(req.query.plate);

	return res.send(result);
});

server.listen(3333);
