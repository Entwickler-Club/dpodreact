/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import * as dpod from '../dataLayer/dpod';
import { useState } from 'react';

class ControllerShowcaseManageItemTypes extends Controller {

	constructor(request: any, response: any) {
		super(request, response);
	}

	action_loadPageData() {
		(async () => {
			const showcaseReports = await dpod.getShowcaseReports();
			const showcaseReport = await dpod.getShowcaseReport('id = 1');
			// }
			// catch (e: any) {
			// 	console.log(e.message);
			// }
			this.response.send({
				showcaseReportObjects: showcaseReports.getAsItemObjects()
				// showcaseReport: showcaseReport.getItemObject()
			});
		})();
	}

}

export default ControllerShowcaseManageItemTypes;
