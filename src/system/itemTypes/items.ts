const fs = require('fs');

class Items {

    protected items: any[] = [];
    protected itemTypeIdCode = '';
    protected jsonPathAndFileName: string = ''; 

    constructor() {
        this.initialize();
    }

    initialize() {
        this.jsonPathAndFileName = `src/system/data/json/itemType_${this.itemTypeIdCode}.json`;
    }

    loadRecords(callback: any) {
        fs.readFile(`./${this.jsonPathAndFileName}`, 'utf-8', (err: any, rawData: any) => {
            const records = JSON.parse(rawData);
            callback(records);
        });
    }

    debug(): void {
        console.log(`itemTypeIdCode: "${this.itemTypeIdCode}"`);
        console.log(`number of items: ${this.items.length}`);
    }

    fillWithObjectArray<T>(itemObjects: T[], callback: any) {
        itemObjects.forEach((itemObject: T) => {
            const item = callback();
            item.fillWithObject(itemObject);
            this.items.push(item);
        })
    }

}

export default Items;