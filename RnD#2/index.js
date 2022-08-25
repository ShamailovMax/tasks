// 3.Как проверить существования свойства в объекте? "key" in object

let user = {
  name: "Max",
  "has ipoteka": "zopa",
};

console.log("has ipoteka" in user); // true
console.log(user["has ipoteka"]);

// 4.Как перебрать все свойства объекта?

for (let key in user) {
  console.log(user[key]);
}

let user2 = Object.assign({}, user); // { name: 'Max', 'has ipoteka': 'zopa' }
console.log(user2);

// 5.Как клонировать один объект в другой? (два способа)
// 6.Как сделать, чтобы объект:
// 7.был равен определенному числу?
// 8.был равен определенной строке?
// 9.был не равен сам себе?

let obj = {
  title: "qwerty",
  name: "Maxim",
};
let obj2 = {
  title: "qwerty",
  name: "Sasha",
};

function greet() {
  console.log(this.name);
}

obj.age = 21;
obj.greet = greet;
obj2.greet = greet;

obj.greet();
obj2.greet();

// ++++++++++++++++++++

const foo = () => {
  console.log(this);
};
