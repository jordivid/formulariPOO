export class Product {
    constructor(name, price, date) {
        this.name = name;
        this.price = price;
        this.date = date;
    }

    get Name() {
        return this.name;
    }

    get Price() {
        return this.price;
    }

    get Date() {
        return this.date;
    }

    set Name(newName) {
        this.name = newName;
    }

    set Price(newPrice) {
        this.price = newPrice;
    }

    set Date(newDate) {
        this.date = newDate;    
    }
}