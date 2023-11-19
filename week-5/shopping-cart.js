/**
    Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/18/23
    shopping-cart.js Description: This class represents a shopping cart
    containing the products selected. 
**/


export class ShoppingCart {
    constructor() {
        this.products = []; // This array will store products added to the cart
    }

    add(product) {
        this.products.push(product); // Adds a new product to the products array
    }

    count() {
        return this.products.length; // Returns the number of products in the cart
    }

    *[Symbol.iterator]() {
        // This generator yields each product in the cart
        for (let product of this.products) {
            yield product;
        }
    }
}
