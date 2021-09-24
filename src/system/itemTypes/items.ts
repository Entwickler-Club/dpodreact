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

	infuseWithItemObjects<T>(itemObjects: T[], callback: any) {
		itemObjects.forEach((itemObject: T) => {
			const item = callback();
			item.fillWithObject(itemObject);
			this.items.push(item);
		})
	}

	getItems<T>(): T[] {
		return this.items;
	}

	getItemObjects() {
		return this.items.map(item => item.getItemObject());
	}
}

export default Items;