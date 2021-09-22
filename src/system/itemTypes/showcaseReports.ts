import Items from './items';
import ShowcaseReport from './showcaseReport';

import { IShowcaseReport } from '../dataLayer/interfaces';

class ShowcaseReports extends Items {
    private items: IShowcaseReport[] = [];
    protected itemTypeIdCode: string = 'showcaseReports';

    constructor() {
        super();
        this.initialize();
    }

    // TODO: turn into generic method in Items`
    fillWithObjectArray(itemObjects: IShowcaseReport[]) {
        itemObjects.forEach((itemObject: IShowcaseReport) => {
            const item = new ShowcaseReport();
            item.fillWithObject(itemObject);
        })
    }

    static instantiateFromObjectArray(showcaseReportObjects: IShowcaseReport[]): ShowcaseReports {
        const showcaseReports = new ShowcaseReports();
        showcaseReports.fillWithObjectArray(showcaseReportObjects);
        return showcaseReports;
    }
}

export default ShowcaseReports;
