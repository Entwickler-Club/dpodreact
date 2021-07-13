import SqliteManager from '../src/system/classes/sqliteManager';
import DpodSiteBuilder from '../src/system/classes/dpodSiteBuilder';
export { };
const express = require('express');
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

app.get('/jsonManager', (req: any, res: any) => {
	res.send({
		records: [
			{
				id: 1,
				message: 'test message'
			},
			{
				id: 2,
				message: 'test message2'
			}
		]
	});
});

app.post('/createPage', (req: any, res: any) => {
	const { pageTitle } = req.body;
	DpodSiteBuilder.createPage(pageTitle);
	res.status(201).json({
		success: true,
		pageTitle
	});
});

app.post('/deletePage', (req: any, res: any) => {
	const { pageTitle } = req.body;
	DpodSiteBuilder.deletePage(pageTitle);
	res.status(204).json({
		success: true,
		pageTitle
	});
});

app.listen(port, () => {
});