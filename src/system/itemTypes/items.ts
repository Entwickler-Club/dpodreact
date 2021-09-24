const fs = require('fs');

class Items {

    protected items: any[] = [];
    protected itemTypeIdCode = '';
    protected jsonPathAndFileName: string = ''; 
	protected dql: string = '';

    constructor(dql: string) {
        this.initialize();
		this.dql = dql;
    }

    initialize() {
        this.jsonPathAndFileName = `src/system/data/json/itemType_${this.itemTypeIdCode}.json`; 
    }

    getObjectArrayFromJsonFile(callback: any) {
        fs.readFile(`./${this.jsonPathAndFileName}`, 'utf-8', (err: any, rawData: any) => {
            const objectArray = JSON.parse(rawData);
            callback(objectArray);
        });
    }

    debug(): void {
        console.log(`itemTypeIdCode: "${this.itemTypeIdCode}"`);
        console.log(`number of items: ${this.items.length}`);
    }

    infuseWithObjectArray<T>(itemObjects: T[], callback: any) {
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