class PageItems {

    loadCode: string;

    constructor(loadCode: string) {
        this.loadCode = loadCode;
    }

    displayForDebugging(): void {
        console.log(`loadCode: "${this.loadCode}"`);
    }
}

export default PageItems;
