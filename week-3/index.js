//index.js - import all product details and handle the place order button//

import { Bill } from './bill.js';
import { Beverage } from './beverage.js';
import { Appetizer } from './appetizer.js';
import { MainCourse } from './main-course.js';
import { Dessert } from './dessert.js';


  // Function to create and append appetizer items
  function loadAppetizers() {
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
function loadCourses() {
    const container = document.getElementById('main-courses-container');
    container.innerHTML = '';
    for (const [course, price] of Object.entries(coursePrices)) {
      const label = document.createElement('label');
      label.htmlFor = course;
      label.textContent = `${course.replace(/-/g, ' ')} - $${price.toFixed(2)}`;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = course;
      checkbox.name = 'course';
      checkbox.value = course;
      label.insertBefore(checkbox, label.firstChild);
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    }
  }

  // Function to load desserts
function loadMaincourses() {
    const container = document.getElementById('desserts-container');
    container.innerHTML = '';
    for (const [dessert, price] of Object.entries(dessertPrices)) {
      const label = document.createElement('label');
      label.htmlFor = dessert;
      label.textContent = `${dessert.replace(/-/g, ' ')} - $${price.toFixed(2)}`;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = dessert;
      checkbox.name = 'dessert';
      checkbox.value = dessert;
      label.insertBefore(checkbox, label.firstChild);
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    }
  }
  
      // Append the checkbox and label to the container
      label.insertBefore(checkbox, label.firstChild); // Insert the checkbox before the label text
      container.appendChild(label);
      container.appendChild(document.createElement('br')); // For spacing, if needed
    }
  }
  
  // Call the function to load appetizers on page load
  document.addEventListener('DOMContentLoaded', loadAppetizers);
  

document.getElementById('btnOrder').addEventListener('click', () => {
  const bill = new Bill();
  
  // Gather all the checked beverages
  document.querySelectorAll('#beverages-container input[type="checkbox"]:checked').forEach(checkbox => {
    bill.addItem(new Beverage(checkbox.id, beveragePrices[checkbox.value]));
  });

  // Gather all the checked appetizers
  document.querySelectorAll('#appetizers-container input[type="checkbox"]:checked').forEach(checkbox => {
    bill.addItem(new Appetizer(checkbox.id, appetizerPrices[checkbox.value]));
  });

  // Gather all the checked main courses
  document.querySelectorAll('#main-courses-container input[type="checkbox"]:checked').forEach(checkbox => {
    bill.addItem(new Maincourse(checkbox.id, maincoursePrices[checkbox.value]));
  });

  // Gather all the checked desserts
  document.querySelectorAll('#desserts-container input[type="checkbox"]:checked').forEach(checkbox => {
    bill.addItem(new Dessert(checkbox.id, dessertPrices[checkbox.value]));
  });

  // Display the total
  document.getElementById('order-total').textContent = `Your order total is: $${bill.getTotal()}`;
});
