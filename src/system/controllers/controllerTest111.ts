/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import fs from 'fs';

class ControllerTest111 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		fs.readFile('./src/system/data/json/pageData_test111.json', 'utf-8', (err: any, res: any) => {
			const data = JSON.parse(res);
			this.response.send({
				pageDataFromJson: data
			});
		});
	}

}

export default ControllerTest111;
