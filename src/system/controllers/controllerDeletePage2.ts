/* eslint-disable @typescript-eslint/no-useless-constructor */
import DpodSiteBuilder from '../classes/dpodSiteBuilder';
import Controller from './controller';
import * as qstr from '../qtools/qstr';

class ControllerDeletePage2 extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		const pageItems = [
			{
				idCode: 'test111',
				title: 'Test 111'
			},
			{
				idCode: 'test222',
				title: 'Test 222'
			},
			{
				idCode: 'deletePage3',
				title: 'Delete Page 3'
			}
		]
		this.response.send({
			message: '',
			pageItems
		});
	}

	action_deletePage() {
		const { deletePageIdCode } = this.requestData;
		const deletePageTitle = qstr.forceTitleNotation(deletePageIdCode);
		const dpodSiteBuilder = new DpodSiteBuilder(deletePageIdCode);
		dpodSiteBuilder.deletePage(deletePageIdCode);
		this.response.send({
			message: `Deleted page ${deletePageTitle}.`
		});
	}


}

export default ControllerDeletePage2;
