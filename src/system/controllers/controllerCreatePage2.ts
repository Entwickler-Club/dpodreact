/* eslint-disable @typescript-eslint/no-useless-constructor */
import DpodSiteBuilder from '../classes/dpodSiteBuilder';
import Controller from './controller';

class ControllerCreatePage2 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
        this.response.send({
           message: 'Welcome to this page.' 
        });
	}

	action_createPage() {
		const { createPageTitle, createPageKindIdCode } = this.requestData;
		const dpodSiteBuilder = new DpodSiteBuilder(createPageTitle, createPageKindIdCode);
		dpodSiteBuilder.createPage();
		this.response.send({
			message: `Created page: ${createPageTitle}`
		});
	}
}

export default ControllerCreatePage2;
