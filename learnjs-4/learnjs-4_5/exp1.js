// пример 1
function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.isExists = true;
}

let animals = []

let dog = new Animal('dog', 'Busty', 1)
let cat = new Animal('cat', 'Kit', 6)
let bird = new Animal('bird', 'Chizik', 10)

animals.push(dog, cat, bird)
console.log(animals);
