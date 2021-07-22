class Items {

    itemTypeIdCode = '';
    loadCode: string;
    // TODO: dataSource: IDataSource = null;
    jsonPathAndFileName: string = ''; // e.g. src/system/data/json/itemType_pageItems.json

    constructor(loadCode: string) {
        this.loadCode = loadCode;
    }

    initialize() {
        this.jsonPathAndFileName = `src/system/data/json/itemType_${this.itemTypeIdCode}`;
    }

    displayForDebugging(): void {
        console.log(`itemTypeIdCode: "${this.itemTypeIdCode}"`);
        console.log(`loadCode: "${this.loadCode}"`);
    }
}

export default Items;