// пример преобразования типов
function User(name, age) {
  this.name = name;
  this.age = age;

  // тип преобразования объекта - hint
  // hint может быть только 'string', 'number', 'default'
  this[Symbol.toPrimitive] = (hint) => {
    if (hint === "string") return this.name;
    if (hint === "number") return this.age;
  };
}

let user = new User("Max", 21);
console.log(String(user));
