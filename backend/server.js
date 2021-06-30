const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
	res.send({
		message: "test",
		total: 87232
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});