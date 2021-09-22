/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import ShowcaseReports from '../itemTypes/showcaseReports';
import * as dpod from '../dataLayer/dpod';

class ControllerShowcaseManageItemTypes extends Controller {

	private showcaseReports: ShowcaseReports; 

	constructor(request: any, response: any) {
		super(request, response);
		this.showcaseReports = dpod.getShowcaseReports();
		this.showcaseReports.debug();
	}

	action_loadPageData() {
		this.response.send({
			showcaseReports: this.showcaseReports
		});
	}

}

export default ControllerShowcaseManageItemTypes;
