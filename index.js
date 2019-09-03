const express = require('express');
const sinespApi = require('sinesp-api');

const server = express();

server.use(express.json());

server.post('/search-car-plate', async (req, res) => {
	const result = await sinespApi.search(req.body.id);

	return res.send(result);
});

server.listen(3232);
