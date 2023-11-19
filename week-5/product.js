/**
    Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/18/23
    product.js Description: Product class is used to create an object
    representing the item for sale. Describes name, price, and a randomly
    generated unique ID.
**/

export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price);
        this.id = Math.random().toString(16).slice(2); // This creates a random id
    }
}
