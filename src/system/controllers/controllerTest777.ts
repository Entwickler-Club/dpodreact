/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerTest777 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		console.log('in contreoller');
        this.response.send({
           message: 'Welcome to this page.' 
        });
	}

}

export default ControllerTest777;
