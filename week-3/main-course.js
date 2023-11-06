export function loadMainCourses() {
    const mainCourses = [
        { name: 'Street Tacos', price: '9.70' },
        { name: 'Boneless Wings', price: '12.80' },
        { name: 'Cheese Burger with Fries', price: '12.65' },
        { name: 'Chicken Wrap with Salad', price: '9.65' }
    ];

    const container = document.getElementById('main-courses-container');
    mainCourses.forEach(course => {
        const item = document.createElement('div');
        item.innerHTML = `<input type="checkbox" id="${course.name.toLowerCase().replace(/ /g, '-')}" name="mainCourses">
                          <label for="${course.name.toLowerCase().replace(/ /g, '-')}">${course.name} ($${course.price})</label><br>`;
        container.appendChild(item);
    });
}
