import Items from './items';
import ShowcaseReport from './showcaseReport';

import { IShowcaseReport } from '../dataLayer/interfaces';

class ShowcaseReports extends Items {
	protected items: ShowcaseReport[] = [];
	protected itemTypeIdCode: string = 'showcaseReports';

	constructor() {
		super();
		this.initialize();
	}

	static instantiateFromObjectArray(showcaseReportObjects: IShowcaseReport[]): ShowcaseReports {
		const showcaseReports = new ShowcaseReports();
		showcaseReports.fillWithObjectArray<IShowcaseReport>(showcaseReportObjects, () => new ShowcaseReport());
		return showcaseReports;
	}
}

export default ShowcaseReports;
