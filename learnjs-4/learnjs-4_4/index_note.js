// Методы объекта, "this"

let user = {
  name: "Макс",
  age: 21,
  greeting() {
    console.log(this.name);
  },
};

user.greeting();

// this не является фиксированным
function sayHi() {
  console.log(this.name);
}


let user1 = {name: 'Sergei'}
let user2 = {name: 'Alexei'}

user1.f = sayHi
user2.f = sayHi

user1.f()     // Sergei
user2.f()     // Alexei

user2['f']()  // Alexei

// при вызове obj.f() значение this внутри f равно obj
