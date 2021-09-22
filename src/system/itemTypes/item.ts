class Item {

    protected itemObject: any = {};

    constructor() {

    }

    get_id() {
        return this.itemObject.id;
    }
    
    get_systemWhenCreated() {
        return this.itemObject.systemWhenCreated;
    }
    
    get_systemWhoCreated() {
        return this.itemObject.systemWhoCreated;
    }

    getItemObject() {
        return this.itemObject;
    }
}

export default Item;