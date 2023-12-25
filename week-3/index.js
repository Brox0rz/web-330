//index.js - import all product details and handle the place order button//

import { Bill } from './bill.js';
import { loadBeverages } from './beverage.js';
import { loadAppetizers } from './appetizer.js';
import { loadMainCourses } from './main-course.js';
import { loadDesserts } from './dessert.js';


let currentBill = new Bill();

document.getElementById('btnOrder').addEventListener('click', () => {
  currentBill = new Bill(); // Reset the bill for a new order
})

  // Function to create and append appetizer items
function loadAppetizer() {
  const container = document.getElementById('appetizers-container');
  container.innerHTML = ''; // Clear the container

  for (const [appetizer, price] of Object.entries(appetizerPrices)) {
    // Create a label element for the appetizer
    const label = document.createElement('label');
    label.htmlFor = appetizer;
    label.textContent = `${appetizer.replace(/-/g, ' ')} - $${price.toFixed(2)}`;
    label.classList.add('appetizer-label'); // Add class for styling

    // Create a checkbox element for the appetizer
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = appetizer;
    checkbox.name = 'appetizer';
    checkbox.value = appetizer;
  }
}

      // Function to load beverages
function loadBeverages() {
    const container = document.getElementById('beverages-container');
    container.innerHTML = '';
    for (const [beverage, price] of Object.entries(beveragePrices)) {
      const label = document.createElement('label');
      label.htmlFor = beverage;
      label.textContent = `${beverage.replace(/-/g, ' ')} - $${price.toFixed(2)}`;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = beverage;
      checkbox.name = 'beverage';
      checkbox.value = beverage;
      label.insertBefore(checkbox, label.firstChild);
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    }
  }

        // Function to load main courses
function loadMainCourses() {
    const container = document.getElementById('main-courses-container');
    container.innerHTML = ''; // Clear the container before loading new items
    for (const [course, price] of Object.entries(mainCoursePrices)) {
      const label = document.createElement('label');
      label.htmlFor = course;
      label.textContent = `${course.replace(/-/g, ' ')} - $${price.toFixed(2)}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = course;
      checkbox.name = 'mainCourse';
      checkbox.value = course; 
      label.insertBefore(checkbox, label.firstChild); // Insert the checkbox before the label text and append both to the container
      container.appendChild(label);
      container.appendChild(document.createElement('br')); // Add a line break for spacing
    }
}

  // Function to load desserts
function loadDesserts() {
    const container = document.getElementById('desserts-container');
    container.innerHTML = ''; // Clear the container before loading new items
  
    for (const [dessert, price] of Object.entries(dessertPrices)) {
      // Create a label element for the dessert
      const label = document.createElement('label');
      label.htmlFor = dessert;
      label.textContent = `${dessert.replace(/-/g, ' ')} - $${price.toFixed(2)}`;
  
      // Create a checkbox element for the dessert
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = dessert;
      checkbox.name = 'dessert';
      checkbox.value = dessert;
  
      // Insert the checkbox before the label text
      label.insertBefore(checkbox, label.firstChild);
  
      // Append the label and a line break to the container for styling
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    }
  }
  
      // Append the checkbox and label to the container
      label.insertBefore(checkbox, label.firstChild); // Insert the checkbox before the label text
      container.appendChild(label);
      container.appendChild(document.createElement('br')); // For spacing, if needed
  
  
  // Gather all the checked beverages
  document.querySelectorAll('#beverages-container input[type="checkbox"]:checked').forEach(checkbox => {
    currentBill.addItem(new Beverage(checkbox.id, beveragePrices[checkbox.value]));
  });

  // Gather all the checked appetizers
  document.querySelectorAll('#appetizers-container input[type="checkbox"]:checked').forEach(checkbox => {
    currentBill.addItem(new Appetizer(checkbox.id, appetizerPrices[checkbox.value]));
  });

  // Gather all the checked main courses
  document.querySelectorAll('#main-courses-container input[type="checkbox"]:checked').forEach(checkbox => {
    currentBill.addItem(new MainCourse(checkbox.id, mainCoursePrices[checkbox.value]));
  });

  // Gather all the checked desserts
  document.querySelectorAll('#desserts-container input[type="checkbox"]:checked').forEach(checkbox => {
    currentBill.addItem(new Dessert(checkbox.id, dessertPrices[checkbox.value]));
  });

  // Display the total
  document.getElementById('order-total').textContent = `Your order total is: $${currentBill.getTotal()}`;
 




// Function to update the total on the webpage
function updateTotalDisplay() {
 
  const total = currentBill.getTotal();
  document.getElementById('order-total').textContent = `Total: $${total}`;
}
