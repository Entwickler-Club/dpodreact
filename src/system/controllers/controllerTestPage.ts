import Controller from './controller';
import fs from 'fs';

class ControllerTestPage extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'test message' 
        });
	}

}

export default ControllerTestPage;
