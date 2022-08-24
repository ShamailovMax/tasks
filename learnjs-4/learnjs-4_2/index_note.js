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

console.log(a == b);    // true
console.log(a === b);   // true
