import { Product } from './product.js';

export class MainCourse extends Product {

}

const mainCourses = [
    { name: 'Vegan Burger', price: '9.99' },
    { name: 'Stuffed Bell Peppers', price: '7.99' },
    { name: 'Mushroom Stroganoff', price: '8.49' },
    { name: 'Quinoa Salad', price: '6.50' }
];

const container = document.getElementById('main-courses-container');
mainCourses.forEach(course => {
  const item = document.createElement('div');
  item.innerHTML = `<input type="checkbox" id="${course.name.toLowerCase().replace(/ /g, '-')}" name="main-courses">
                    <label for="${course.name.toLowerCase().replace(/ /g, '-')}">${course.name} ($${course.price})</label><br>`;
  container.appendChild(item);
});
