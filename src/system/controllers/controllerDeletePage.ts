/* eslint-disable @typescript-eslint/no-useless-constructor */
import DpodSiteBuilder from '../classes/dpodSiteBuilder';
import Controller from './controller';

class ControllerDeletePage extends Controller {

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
				idCode: 'showcaseNewsApi',
				title: 'Showcase News API'
			}
		];
	}

	action_loadPageData() {
		this.response.send({
			message: '',
			pageItems: this.pageItems
		});
	}

	action_deletePage() {
		const { deletePageIdCode } = this.requestData;
		const dpodSiteBuilder = new DpodSiteBuilder(deletePageIdCode);
		dpodSiteBuilder.deletePage();
		this.response.send({
			message: '', 
		});
	}
}

export default ControllerDeletePage;
