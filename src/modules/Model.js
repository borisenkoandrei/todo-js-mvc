import EventEmitter from "./EventEmitter"

class Model extends  EventEmitter{
    constructor(state = []){
        super();
        this.state = state;
    }

    getItem(id){
        let findItem = this.state.find(item => item.id == id);
        return findItem;
    }

    addItem(item){
        this.state.push(item);

        return item;
    }

    updateItem(id, data){
        let item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);

    }

    deleteItem(id){
        let item = this.getItem(id);
        let index = this.state.indexOf(item);

        if (index > -1){
            this.state.splice(index, 1);
        }

        return id;

    }
}

export default Model;
