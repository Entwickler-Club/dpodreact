/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';

class ControllerShowcaseManageItemTypes extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'Welcome to this page.' 
        });
	}

}

export default ControllerShowcaseManageItemTypes;
