/* eslint-disable @typescript-eslint/no-useless-constructor */
import DpodSiteBuilder from '../classes/dpodSiteBuilder';
import Controller from './controller';
import * as qstr from '../qtools/qstr';

class ControllerDeletePage2 extends Controller {

	private pageItems: any[] = [];

	constructor(request: any, response: any) {
		super(request, response);
		this.pageItems = [
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
	}

	action_loadPageData() {
		this.response.send({
			message: '',
			pageItems: this.pageItems
		});
	}

	action_deletePage() {
		const { deletePageIdCode } = this.requestData;
		const deletePageTitle = qstr.forceTitleNotation(deletePageIdCode);
		// const dpodSiteBuilder = new DpodSiteBuilder(deletePageIdCode);
		// dpodSiteBuilder.deletePage();
		this.response.send({
			message: `Deleted page ${deletePageTitle}.`
		});
	}


}

export default ControllerDeletePage2;
