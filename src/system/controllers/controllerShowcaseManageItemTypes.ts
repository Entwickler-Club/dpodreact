/* eslint-disable @typescript-eslint/no-useless-constructor */
import Controller from './controller';
import { IShowcaseReport} from '../dataLayer/interfaces';
import * as dpod from '../dataLayer/dpod';

class ControllerShowcaseManageItemTypes extends Controller {

	private showcaseReports: IShowcaseReport[] = [];

	constructor(request: any, response: any) {
		super(request, response);
		this.showcaseReports = dpod.getShowcaseReports();
	}

	action_loadPageData() {
        this.response.send({
			showcaseReports: this.showcaseReports
        });
	}

}

export default ControllerShowcaseManageItemTypes;
