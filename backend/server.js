const express = require('express');
const SqliteManager = require('../src/system/classes/sqliteManager');

const app = express();
const port = 5001;

app.get('/sqliteTest', (req, res) => {

	const sqliteManager = new SqliteManager('./src/system/data/main.sqlite');

	sqliteManager.getRecordsWithSql(`SELECT * FROM messages`)
		.then((records) => {
			res.send({
				records
			});
		})
		.catch((error) => console.log(error));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});