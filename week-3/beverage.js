import { Product } from './product.js';

export class Beverage extends Product {}

export function loadBeverages() {
  const beverages = [
    { name: 'Soda', price: '3.30' },
    { name: 'Sweet Tea', price: '3.30' },
    { name: 'Iced Coffee', price: '2.49' },
    { name: 'Dignity', price: '2.15' }
  ];

  const container = document.getElementById('beverages-container');
  container.innerHTML = ''; // Clear any existing content

  beverages.forEach(beverage => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `<input type="checkbox" id="${beverage.name.toLowerCase().replace(/ /g, '-')}" name="beverages">
                      <label for="${beverage.name.toLowerCase().replace(/ /g, '-')}">${beverage.name} ($${beverage.price})</label><br>`;
    container.appendChild(item);
  });
}
