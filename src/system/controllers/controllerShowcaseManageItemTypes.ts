/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import * as dpod from '../dataLayer/dpod';

class ControllerShowcaseManageItemTypes extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		(async () => {
			const showcaseReports = await dpod.getShowcaseReports();
			this.response.send({
				showcaseReportObjects: showcaseReports.getAsObjectArray()
			});

		})();
	}

}

export default ControllerShowcaseManageItemTypes;
