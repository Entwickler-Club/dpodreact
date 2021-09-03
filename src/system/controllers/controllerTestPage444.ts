/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerTestPage444 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'test message' 
        });
	}

}

export default ControllerTestPage444;
