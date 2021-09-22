const fs = require('fs');

class Items {

    protected itemTypeIdCode = '';
    protected records: any[] = [];
    // TODO: dataSource: IDataSource = null;
    protected jsonPathAndFileName: string = ''; // e.g. src/system/data/json/itemType_pageItems.json

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

    displayForDebugging(): void {
        console.log(`itemTypeIdCode: "${this.itemTypeIdCode}"`);
        console.log(`records: ${this.records.length}`);
    }
}

export default Items;