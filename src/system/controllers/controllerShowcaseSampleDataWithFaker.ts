/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import faker from 'faker';

class ControllerShowcaseSampleDataWithFaker extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		this.response.send([
			{
				label: "Full Name",
				data: faker.name.findName()
			}
		]);
	}

}

export default ControllerShowcaseSampleDataWithFaker;
