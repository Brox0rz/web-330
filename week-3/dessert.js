export function loadDesserts() {
    const desserts = [
        { name: 'Ice Cream', price: '4.30' },
        { name: 'Chocolate Cake', price: '5.40' },
        { name: 'Apple Pie', price: '3.80' }
    ];

    const container = document.getElementById('desserts-container');
    desserts.forEach(dessert => {
        const item = document.createElement('div');
        item.innerHTML = `<input type="checkbox" id="${dessert.name.toLowerCase().replace(/ /g, '-')}" name="desserts">
                          <label for="${dessert.name.toLowerCase().replace(/ /g, '-')}">${dessert.name} ($${dessert.price})</label><br>`;
        container.appendChild(item);
    });
}
