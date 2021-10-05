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

}

export default ShowcaseReports;