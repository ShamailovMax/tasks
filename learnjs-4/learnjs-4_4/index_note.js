// Методы объекта, "this"

let user = {
  name: "Макс",
  age: 21,
  greeting() {
    console.log(this.name);
  },
};

user.greeting()
