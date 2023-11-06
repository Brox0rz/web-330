import { Product } from './product.js';

export class Appetizer extends Product {

}

const appetizers = [
    { name: 'Vegan Nachos', price: '3.99' },
    { name: 'Chips and Salsa', price: '5.50' },
    { name: 'Pretzel with Vegan Cheese', price: '8.80' },
    { name: 'Fried Pickles', price: '8.25' }
];

    const container = document.getElementById('appetizers-container');
    appetizers.forEach(appetizer => {
        const item = document.createElement('div');
        item.innerHTML = `<input type="checkbox" id="${appetizer.name.toLowerCase().replace(/ /g, '-')}" name="appetizers">
                          <label for="${appetizer.name.toLowerCase().replace(/ /g, '-')}">${appetizer.name} ($${appetizer.price})</label><br>`;
        container.appendChild(item);
    });
