export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price);
        this.id = Math.random().toString(16).slice(2); // This creates a random id
    }
}
