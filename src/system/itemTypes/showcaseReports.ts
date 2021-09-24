import Items from './items';
import ShowcaseReport from './showcaseReport';

import { IShowcaseReport } from '../dataLayer/interfaces';

class ShowcaseReports extends Items {
	protected items: ShowcaseReport[] = [];
	protected itemTypeIdCode: string = 'showcaseReports';

	constructor(dql: string = '') {
		super(dql);
		this.initialize();
	}

	initialize() {
		super.initialize();
		// this.getObjectArrayFromJsonFile({

		// });
	}
	getAsObjectArray() {
		return [
			{
				id: 1,
				title: "Showcase #1",
				description: "desc 1",
				systemWhenCreated: '2021-09-21 10:00:02',
				systemWhoCreated: 'admin'
			},
			{
				id: 2,
				title: "Showcase #2",
				description: "desc 2",
				systemWhenCreated: '2021-09-21 10:00:02',
				systemWhoCreated: 'admin'
			},
			{
				id: 3,
				title: "Showcase #3",
				description: "desc 3",
				systemWhenCreated: '2021-09-21 10:00:02',
				systemWhoCreated: 'admin'
			},
			{
				id: 4,
				title: "Showcase #4",
				description: "desc 4",
				systemWhenCreated: '2021-09-21 10:00:02',
				systemWhoCreated: 'admin'
			}
		];
	}

	loadDataFromJson() {
		// ShowcaseReports.instantiateFromObjectArray(scrData);
	}

	static instantiateFromObjectArray(showcaseReportObjects: IShowcaseReport[]): ShowcaseReports {
		const showcaseReports = new ShowcaseReports();
		showcaseReports.infuseWithObjectArray<IShowcaseReport>(showcaseReportObjects, () => new ShowcaseReport());
		return showcaseReports;
	}
}

export default ShowcaseReports;
