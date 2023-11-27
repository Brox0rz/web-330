export class Bill {
  constructor() {
      this.items = [];
  }

  addItem(item) {
      this.items.push(item);
  }

  getTotal() {
      let total = 0;
      this.items.forEach(item => {
          total += parseFloat(item.price);
      });
      return total.toFixed(2); // Set precision to two decimal places
  }
}
