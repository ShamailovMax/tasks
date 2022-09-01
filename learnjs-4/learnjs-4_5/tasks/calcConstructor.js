function Calculator() {
  this.read = function (a, b) {
    this.a = prompt(a);
    this.b = prompt(b);
  };
  this.sum = function () {
    return Number(this.a) + Number(this.b);
  };
  this.mul = function () {
    return Number(this.a) * Number(this.b);
  };
}

let calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul());
