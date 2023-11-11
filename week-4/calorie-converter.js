import { FoodModel } from './food-model.js';

export class CalorieConverter {
  static data = [
    new FoodModel(1007, 'Egg', 78),
    new FoodModel(1008, 'Apple', 95),
    new FoodModel(1009, 'Hamburger', 354),
    new FoodModel(1010, 'Fries', 400),
    new FoodModel(1011, 'Banana', 105),
    new FoodModel(1012, 'Soda', 150)
  ];

  static find(name) {
    return CalorieConverter.data.filter(
      (item) => item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

// Assuming you have a div with id="searchResults" where you want to display results
document.getElementById('btnSearch').addEventListener('click', function() {
  const txtFoodItem = document.getElementById('txtFoodItem').value;
  const foods = CalorieConverter.find(txtFoodItem);
  let tableData = '<table>';

  for (const food of foods) {
    tableData += `<tr><td>${food.name}</td><td>${food.calories}</td></tr>`;
  }

  tableData += '</table>';
  document.getElementById('searchResults').innerHTML = tableData;
});

// Event listener for the Enter key
document.getElementById('txtFoodItem').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('btnSearch').click();
  }
});

// Call the static data field off of the CalorieConverter class
const foodList = CalorieConverter.data;

// Build an HTML string for the list of available food items
let foodListData = '<i>';

// Append the food.name to the variable string
for (const food of foodList) {
  foodListData += `${food.name}, `;
}

// Remove the last comma and space
foodListData = foodListData.trim().slice(0, -1);
foodListData += '</i>';

// Bind the results to the foodList div’s innerHTML
document.getElementById('foodList').innerHTML = foodListData;