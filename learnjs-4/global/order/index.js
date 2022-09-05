function Order() {
  let orders = [];
  this.addItem = function (item, count) {
    // this.item = prompt("Название позиции", item);
    // this.count = prompt("Цена позиции", count);

    this.item = item;
    this.count = count;
  };

  this.removeItem = function (item, count) {};

  this.getCheck = function () {
    // console.log(orders);
    orders = [{ item: this.item, count: this.count }];
    console.log(orders);
    return `${this.item} ... ${this.count} руб.`;
  };

  this.lockOrder = function () {};
  this.unlockOrder = function () {};
}

let order = new Order();
order.addItem("Чай", 95);
order.addItem("Ча", 95);
order.addItem("Ч", 95);
console.log(order.getCheck());
