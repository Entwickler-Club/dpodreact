export {};

const express = require('express');
import SqliteManager from '../src/system/classes/sqliteManager';
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());

app.get('/sqliteTest', (req: any, res: any) => {

	const sqliteManager = new SqliteManager('./src/system/data/main.sqlite');

	sqliteManager.getRecordsWithSql(`SELECT * FROM messages`)
		.then((records) => {
			res.send({
				records
			});
		})
		.catch((error: any) => console.log(error));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});