function Order() {
  this.addItem = function (item, count) {
    this.item = prompt("Название позиции", item);
    this.count = prompt("Цена позиции", count);
  };

  this.removeItem = function (item, count) {};

  this.getCheck = function () {
    return `Товар: ${this.item} Цена: ${this.count} руб.`;
  };

  this.lockOrder = function () {};
  this.unlockOrder = function () {};
}

let order = new Order();
order.addItem();
console.log(order.getCheck());
