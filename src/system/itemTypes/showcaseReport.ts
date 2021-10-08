import Item from './item';

class ShowcaseReport extends Item {

    constructor() {
        super();
        this.itemObject = {
            title: 'DUMMY TITLE2',
            description: 'DUMMY DESCRIPTION'
        }
    }

    get_title() {
        return this.itemObject.title;
    }
    
    get_description() {
        return this.itemObject.description;
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


