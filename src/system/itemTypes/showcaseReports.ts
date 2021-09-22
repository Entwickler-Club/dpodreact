import Items from './items';
import { IShowcaseReport } from '../dataLayer/interfaces';

class ShowcaseReports extends Items {

    private items: IShowcaseReport[] = [];
    protected itemTypeIdCode: string = 'showcaseReports';

    constructor() {
        super();
        this.initialize();
    }

    static instantiateFromObjectArray(showcaseReportObjects: IShowcaseReport[]): ShowcaseReports {
        const showcaseReports = new ShowcaseReports();
        return showcaseReports;
    }

}

export default ShowcaseReports;
