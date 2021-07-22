import Items from './items';

class PageItems extends Items {

    loadCode: string;

    constructor(loadCode: string) {
        super(loadCode)
        this.loadCode = loadCode;
        this.initialize();
    }

    initialize() {

    }

    displayForDebugging(): void {
        console.log(`loadCode: "${this.loadCode}"`);
    }
}

export default PageItems;
