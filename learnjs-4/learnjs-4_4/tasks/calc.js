// task link: https://learn.javascript.ru/object-methods#sozdayte-kalkulyator

// 1 вариант - работает
let calculator = {
  read() {
    this.int1 = prompt("введи число 1:");
    this.int2 = prompt("введи число 2:");
  },
  sum() {
    return Number(this.int1) + Number(this.int2);
  },
  mul() {
    return Number(this.int1) * Number(this.int2);
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
