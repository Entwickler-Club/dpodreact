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
		const { deletePageIdCode } = this.requestData;
        this.response.send({
           message: `in deletePage action, will delete page ${deletePageIdCode}` 
        });
	}

}

export default ControllerDeletePage2;
