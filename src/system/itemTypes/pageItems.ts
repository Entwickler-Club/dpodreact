import Items from './items';

class PageItems extends Items {

    itemTypeIdCode: string = 'pageItems';

    constructor() {
        super();
        this.initialize();
    }


}

export default PageItems;
