import * as config from '../src/system/config';
import * as qstr from '../src/system/qtools/qstr';
import { instantiate } from '../src/system/factories/controllerFactory';

const express = require('express');
const cors = require('cors');
const app = express();
const port = config.getBackendPort();

app.use(cors());
app.use(express.json());

app.post('/controller*', function (request: any, response: any) {
	const controllerIdCode = qstr.chopLeft(request.path, '/');
	const controller = instantiate(controllerIdCode, request, response);
	if (controller !== undefined) {
		controller.process();
	}
});

app.get('/newsapi', (req: any, res: any) => {
	const NewsAPI = require('newsapi');
	const newsapi = new NewsAPI('34c534a3b60d46ed81a257c952fbb3da');
	newsapi.v2.topHeadlines({
		language: 'de'
	}).then((data: any) => {
		console.log(data);
		res.send(data);
	});
});

app.listen(port, () => {
	console.log(`backend listening on port ${port}...`);
});