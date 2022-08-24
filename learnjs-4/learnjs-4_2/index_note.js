// копирование объектов и ссылки

let message = "hello";
let phrase = message;

let user = {
  name: "Max",
};

let admin = user; // копируется ссылка

admin.name = "Tom";

console.log(admin.name, user.name); // Tom Tom

// так вышло, потому что изменения видны по ссылке из переменной user

// сравнение по ссылке
let a = {};
let b = a;

console.log(a == b); // true
console.log(a === b); // true

// теперь попробуеем вот так
let c = {};

console.log(a == c); // false

// -----------------------------------
// клонирование и объединение объектов
// Object.assign

let user = {
  name: "Chak",
  age: 44,
};

let clone = {};

// копируем все св-ва из user в clone
for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Mad";

console.log(user.name); // Chak
console.log(clone.name); // Mad

// Object.assign
let user = { name: "Vasily" };
let user2 = { age: 40 };
let user3 = { hasIpoteka: true };
let user4 = { children: 7 };

Object.assign(user, user2, user3, user4);
console.log(user); // { name: 'Vasily', age: 40, hasIpoteka: true, children: 7 }

// еще один пример
let user = { userName: "James" };
let clone = Object.assign({}, user);
console.log(clone); // { userName: 'James' }

// -----------------------------------------
// Вложенное клонирование
let user = {
  name: "Max",
  sizes: {
    height: 176,
    weight: 70,
  },
};

console.log(user.sizes.weight); // 70

let clone = Object.assign({}, user);
console.log(user.sizes === clone.sizes); // true, так как один и тот же объект

user.sizes.height++;

console.log(user.sizes.height);
console.log(clone.sizes.height);
