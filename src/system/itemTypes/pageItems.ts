import Items from './items';

class PageItems extends Items {

    itemTypeIdCode: string = 'pageItems';

    constructor(loadCode: string) {
        super(loadCode)
        this.initialize();
    }


}

export default PageItems;
