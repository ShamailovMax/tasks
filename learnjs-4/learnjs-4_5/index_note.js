// Конструктор, оператор "new"

// Создать функцию-конструктор можно следующим образом:
function Person(name) {
  this.name = name;
  this.isAdmin = false;
}

// создать новый объект конструктора можно с помощью ключевого слова new:
let person = new Person("Mike");

console.log(person.name); // Mike
console.log(person.isAdmin); // false

// Возврат значения из конструктора, return
// В случае, если у нас есть return с каким-то объектом => return заменяет this
// если return'a нет, по умолчанию идет this
function BigUser() {
  this.name = "Jake";
  return { name: "Kk" };
}

console.log(new BigUser().name); // Kk

// в случае, если return пустой, у нас снова в приоритете this
function SmallUser() {
  this.name = "Pavel";
  return;
}

console.log(new SmallUser().name); // Pavel
// Убедились, что все сработало на Ура

// Создание методов в конструкторе
function Car(model) {
  this.model = model;

  this.getInfo = function () {
    console.log(this.model);
  };
}

let bmw = new Car("BMW");
bmw.getInfo();
