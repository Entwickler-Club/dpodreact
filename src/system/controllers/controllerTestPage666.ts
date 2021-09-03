/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerTestPage666 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'Welcome to this page2.' 
        });
	}

}

export default ControllerTestPage666;
