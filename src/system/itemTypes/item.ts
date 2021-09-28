class Item {

    protected itemObject: any = {};

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

    debug() {
        console.log('item exists');
    }
}

export default Item;