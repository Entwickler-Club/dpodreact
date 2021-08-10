import SqliteManager from '../src/system/classes/sqliteManager';
import DpodSiteBuilder from '../src/system/classes/dpodSiteBuilder';
import * as config from '../src/system/config';

const fs = require('fs');
export {};
const express = require('express');
const cors = require('cors');

const app = express();
const port = config.getBackendPort();

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

app.get('/newsapi', (req: any, res: any) => {

	const NewsAPI = require('newsapi');
	const newsapi = new NewsAPI('34c534a3b60d46ed81a257c952fbb3da');
	newsapi.v2.topHeadlines({
		language: 'de'
	}).then((data: any) => {
		res.send(data);
	});
});

app.get('/jsonReadWrite', (req: any, res: any) => {
	fs.readFile('./src/system/data/json/itemType_pageItems.json', 'utf-8', (err: any, rawData: any) => {
		const data = JSON.parse(rawData);
		res.send({
			records: data
		});
	});
});

app.post('/jsonReadWrite', (req: any, res: any) => {
	const { records } = req.body;
	fs.writeFile('./src/system/data/json/itemType_pageItems.json', JSON.stringify(records), (err: any) => {
		if (err) throw err;
		res.status(201).json({
			success: true
		});
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
	console.log(`backend listening on port ${port}...`);
});