// пример преобразования типов
function User(name, age) {
  this.name = name;
  this.age = age;

  // тип преобразования объекта - hint
  // hint может быть только 'string', 'number', 'default'
  this[Symbol.toPrimitive] = (hint) => {
    if (hint === "string") return this.name;
    return this.age
  };
}

let max = new User("Max", 21);
let denis = new User("Denis", 24);

console.log(String(max)); // Max
console.log(Number(denis)); // 24
console.log(denis - max); // 3
console.log(max + denis); // 45
