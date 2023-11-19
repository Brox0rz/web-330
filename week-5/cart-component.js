/**
    Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/18/23
    cart-component.js Description: This file provides the cart image and
    its stylings. Also creates the HTML web component.
**/
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .cart-icon {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .cart-icon img {
      width: 48px; 
      height: auto;
      margin-right: 5px;
    }

    :host {
        display: block; /* Makes <cart-component> a block-level element for centering */
        margin-left: auto;
        margin-right: auto;
        width: fit-content; 
      }

      #cart-count {
        font-size: 2.0em;
        color: #4F3674;
      }
  </style>
  <span id="cartIcon" class="cart-icon"> 
    <img src="images/icons8-fast-cart-96.png" alt="Shopping Cart" />
    <span id="cart-count">0</span>
  </span>
`;



class CartComponent extends HTMLElement {
  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateCount();
  }

  updateCount(count) {
    // Checks if count is an integer, otherwise default to 0
    const itemCount = Number.isInteger(count) ? count : 0;
    // Gets the cart-count element from the shadow DOM
    const cartCountElement = this.shadowRoot.getElementById('cart-count');
    // Updates the text content of cart-count element with itemCount,
    // enclosed in parentheses
    cartCountElement.textContent = `(${itemCount})`;
  }
  
}

customElements.define('cart-component', CartComponent);

