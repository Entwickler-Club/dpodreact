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

	// TODO: refactor this to use TypeScript generics and put back into Items
	static async instantiateFromItemObjects<T,U,V>(itemsType: {new(): T}, itemType: {new(): V},itemObjects: U[]): Promise<T> {
		return new Promise(resolve => {
			const items = new itemsType();
			(async () => {
				await (items as unknown as Items).infuseWithItemObjects<U>(itemObjects, () => {
					return new itemType();
				});
				resolve(items);
			})();
		})
	}
}

export default ShowcaseReports;