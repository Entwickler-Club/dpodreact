import Item from './item';
const fs = require('fs');

class Items {

	protected itemObjects: any = [];
	protected items: any[] = [];
	protected itemTypeIdCode = '';
	protected jsonPathAndFileName: string = '';
	protected dql: string = '';

	constructor(dql: string = '') {
		this.dql = dql === '' ? 'all' : dql;
	}

	initialize() {
		this.jsonPathAndFileName = `src/system/data/json/itemType_${this.itemTypeIdCode}.json`;
	}

	async infuseWithData() {
		return new Promise(resolve => {
			(async () => {
				this.itemObjects = await this.getItemObjectsFromJsonFile();
				resolve(true);
			})();
		});
	}

	getItemObjectsFromJsonFile(): Promise<any> {
		return new Promise(resolve => {
			fs.readFile(`./${this.jsonPathAndFileName}`, 'utf-8', (err: any, rawData: any) => {
				const itemObjects = JSON.parse(rawData);
				resolve(itemObjects);
			});
		})
	}

	debug(): void {
		console.log(`itemTypeIdCode: "${this.itemTypeIdCode}"`);
		console.log(`number of items: ${this.items.length}`);
	}

	static async instantiateFromItemObjects<T, U, V>(itemsType: { new(): T }, itemType: { new(): U }, itemObjects: V[]): Promise<T> {
		return new Promise(resolve => {
			const items = new itemsType();
			(async () => {
				await (items as unknown as Items).infuseWithItemObjects<V>(itemObjects, () => {
					return new itemType();
				});
				resolve(items);
			})();
		})
	}

	infuseWithItemObjects<T>(itemObjects: T[], callback: any) {
		return new Promise(resolve => {
			itemObjects.forEach((itemObject: T) => {
				const item: Item = callback();
				item.infuseWithItemObject<T>(itemObject);
				this.items.push(item);
			});
			resolve(itemObjects);
		})
	}

	getItems<T>(): T[] {
		return this.items;
	}

	getItemObjects() {
		return this.items.map(item => item.getItemObject());

	}

	getFirstItem<T>(itemType: { new(): T }): Promise<T> {
		return new Promise((resolve, reject) => {
			// resolve(new itemType());
			resolve(this.items[0]);
		});
	}
}

export default Items;