/* eslint-disable @typescript-eslint/no-useless-constructor */
import DpodSiteBuilder from '../classes/dpodSiteBuilder';
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
		const dpodSiteBuilder = new DpodSiteBuilder(deletePageIdCode);
		dpodSiteBuilder.deletePage(deletePageIdCode);
		this.response.send({
			message: `in deletePage action, will delete page ${deletePageIdCode}`
		});
	}


}

export default ControllerDeletePage2;
