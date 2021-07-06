export {};

const express = require('express');
import SqliteManager from '../src/system/classes/sqliteManager';
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

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

app.post('/createPage', (req: any, res: any) => {
	console.log(req.body);
	console.log('posting in server');
	res.send('testCreatedPage');
});

app.listen(port, () => {
});