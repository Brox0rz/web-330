import { Product } from './product.js';

export class Dessert extends Product {}

export function loadDesserts() {
const desserts = [
    { name: 'Vegan Ice Cream', price: '3.30' },
    { name: 'Cookie', price: '2.30' },
    { name: 'Vegan Cheesecake', price: '4.49' },
    { name: 'Divinity Pie', price: '5.15' }
];

    const container = document.getElementById('desserts-container');
desserts.forEach(dessert => {
  const item = document.createElement('div');
  item.innerHTML = `<input type="checkbox" id="${dessert.name.toLowerCase().replace(/ /g, '-')}" name="desserts">
                    <label for="${dessert.name.toLowerCase().replace(/ /g, '-')}">${dessert.name} ($${dessert.price})</label><br>`;
  container.appendChild(item);
});
}