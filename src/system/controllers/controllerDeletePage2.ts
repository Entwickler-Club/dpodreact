/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerDeletePage2 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'in loadPageData action' 
        });
	}

	action_deletePage() {
        this.response.send({
           message: 'in deletePage action' 
        });
	}

}

export default ControllerDeletePage2;
