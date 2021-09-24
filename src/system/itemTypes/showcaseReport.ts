import { IShowcaseReport } from '../dataLayer/interfaces';
import Item from './item';

class ShowcaseReport extends Item {
    constructor() {
        super();
    }

    get_title() {
        return this.itemObject.title;
    }
    
    get_description() {
        return this.itemObject.description;
    }
    
    fillWithObject(itemObject: IShowcaseReport) {
        this.itemObject = itemObject;
    }

    displayAsHtml() {
        return `
        <div>
        This is a Showcase Report: "${this.get_title()}"
        </div>
        `;
    }

}

export default ShowcaseReport;


