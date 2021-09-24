import Items from './items';
import ShowcaseReport from './showcaseReport';
import { IShowcaseReport } from '../dataLayer/interfaces';

class ShowcaseReports extends Items {
	protected items: ShowcaseReport[] = [];
	protected itemTypeIdCode: string = '';

	constructor(dql: string = '') {
		super(dql);
		this.itemTypeIdCode = 'showcaseReports';
		this.initialize();
	}

	getAsItemObjects() {
		return this.itemObjects;
	}

	static async instantiateFromItemObjects(itemObjects: IShowcaseReport[]): Promise<ShowcaseReports> {
		return new Promise(resolve => {
			const showcaseReports = new ShowcaseReports();
			(async () => {
				await showcaseReports.infuseWithItemObjects<IShowcaseReport>(itemObjects, () => {
					return new ShowcaseReport();
				});
				resolve(showcaseReports);
			})();
		})
	}

}

export default ShowcaseReports;