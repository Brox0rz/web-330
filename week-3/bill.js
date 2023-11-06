export class Bill {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
  }
  
