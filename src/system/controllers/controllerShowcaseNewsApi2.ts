/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
const NewsAPI = require('newsapi');

class ControllerShowcaseNewsApi2 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		const newsapi = new NewsAPI('34c534a3b60d46ed81a257c952fbb3da');
		newsapi.v2.topHeadlines({
			language: 'de'
		}).then((data: any) => {
			this.response.send({ ...data });
		});
	}
}

export default ControllerShowcaseNewsApi2;