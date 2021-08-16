import Controller from './controller';
import fs from 'fs';

class ControllerShowcaseJsonReadWrite extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
	fs.readFile('./src/system/data/json/itemType_pageItems.json', 'utf-8', (err: any, rawData: any) => {
		const data = JSON.parse(rawData);
		this.response.send({
			records: data
		});
	});
	}

}

export default ControllerShowcaseJsonReadWrite;