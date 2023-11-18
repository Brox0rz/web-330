// cart-component.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .cart-icon {
      cursor: pointer;
    }
    /* Additional styles */
  </style>
  <span class="cart-icon">
    <i class="fa fa-shopping-cart"></i>
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

  updateCount(count = 0) {
    this.shadowRoot.getElementById('cart-count').textContent = count;
  }
}

customElements.define('cart-component', CartComponent);
