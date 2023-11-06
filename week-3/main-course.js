import { Product } from './product.js';

export class Courses extends Product {

}

    const container = document.getElementById('main-courses-container');
    Courses.forEach(course => {
        const item = document.createElement('div');
        item.innerHTML = `<input type="checkbox" id="${course.name.toLowerCase().replace(/ /g, '-')}" name="mainCourses">
                          <label for="${course.name.toLowerCase().replace(/ /g, '-')}">${course.name} ($${course.price})</label><br>`;
        container.appendChild(item);
    });

const Courses = [
    { name: 'Mushroom Tacos', price: '4.30' },
    { name: 'Wyngz', price: '5.30' },
    { name: 'Impossible Burger w Fries', price: '7.49' },
    { name: 'Vegan Ceasar Salad', price: '4.15' }
];
