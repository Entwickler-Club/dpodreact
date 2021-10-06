import { IShowcaseReport } from '../dataLayer/interfaces';
import Item from './item';

class ShowcaseReport extends Item {

    constructor() {
        super();
        this.itemObject = {
            title: 'DUMMY TITLE',
            description: 'DUMMY DESCRIPTION'
        }
    }

    get_title() {
        return this.itemObject.title;
    }
    
    get_description() {
        return this.itemObject.description;
    }
    
    infuseWithItemObject(itemObject: IShowcaseReport) {
        this.itemObject = itemObject;
    }

    displayAsHtml() {
        return `
        <div>
        This is a Showcase Report: "${this.get_title()}"
        </div>
        `;
    }

    debug() {
        console.log(`title: ${this.get_title()}`);
    }
}

export default ShowcaseReport;


