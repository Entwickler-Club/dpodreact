const express = require('express');
// const SqliteManager = require('../src/system/classes/sqliteManager');
const SqliteManager = require('../src/system/classes/sqliteManager.ts');
const cors = require('cors');

const app = express();
const port = 5001;

// Cross-origin resource sharing
app.use(cors());

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