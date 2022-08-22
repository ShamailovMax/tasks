// Объекты

// есть два метода объялвения объектов
// 1
let user = new Object()

// 2
let user1 = {}

// мы можем добавить объекту ряд каких-либо свойств:
let user2 = {
  userName: "Иван",
  city: "Тверь",
  age: 33,
}

// как нам обратиться к свойствам объекта и вывести на экран?
// вот так:
console.log(user2.userName)                      // Иван
console.log(user2.age)                           // 33
console.log(user2.city)                          // Тверь

// добавление нового свойства в объялвенный выше объект:
user.hasWork = false

// удаление существующего свойства:
delete user.city

// мы можем также добавить имя свойства из нескольких слов
// для этого необходимо просто заключить название свойства в кавычки
let user = {
  firstName: "Иван",
  lastName: "Петров",
  "city index": 120060,
}

// теперь создадим объект при помощи ключевого слова const
const pet = {
  petName: "Барбос",
  animal: "собака",
  age: 4,
  isBarking: true,
}

/* но объявленные с помощью ключевого слова 
const объекты МОЖНО изменять */
// пример
pet.animal = "кошка"
pet.isBarking = false


// Про квадратные скобки
/* чтобы добавить свойство, состоящее из нескольких свойств, 
необходимо использовать квадратные скобки + кавычки */

// так делать не надо
pet.likes meat = true

// так тоже
// pet."likes meat" = true

// это правильное добавление свойства
pet['likes meat'] = true

// вывод созданног свойства
console.log(pet['likes meat'])

// удаление свойства
delete pet['likes meat']

// свойство можно заранее предопределить перед добавлением в объект
let prop = 'can fly'
pet[prop] = false
console.log(pet[prop])                          // can fly

// при этом если мы выведем через точку
console.log(pet.prop)                           // получим undefined

// вычисляемые свойства
let fruit = 'apple'
let bag = {
  [fruit + 'Computers']: 5                      // bag.appleComputers = 5
}

// свойство из переменной
// сложная запись
function makeUser (name, age) {
  return {
    name: name,
    age: age,
  }
}

let user = makeUser('Иван', 33)
console.log(user.name)                          // Иван

// простая запись
function makeUser(name, age) {
  return {
    name,
    age
  }
}

/* в одном и том же объекте можно использовать 
как простые, так и короткие формы записи свойств */
let book = {
  title,
  pages: 240,
}

// Ограничения на имена свойств объектов
/* Есть определенные ограничения на имена переменных
например, нельзя использовать зарезервированные слова
При этом в объекте это разрешено */
let tmp = {
  for: 'you',
  let: 'me',
  0: 'test',
}

console.log(tmp[0])
console.log(tmp['0'])

// свойство __proto__
let obj = {}
obj.__proto__ = 1
console.log(obj.__proto__)                      // {constructor: ƒ, ... , __lookupGetter__: ƒ, …}

// Оператор in - проверяет наличие свойства в объекте
let car = { model: 'Mercedes', year: 2017 }
console.log('model' in car)                     // true
console.log('year' in car)                      // true
console.log('owner' in car)                     // false

// Цикл for ... in
let figure = {
  type: 'square',
  hasAngles: true,
  size: 5,
}

for (let key in figure) {
  console.log(key)                              // type, hasAngles, size
  console.log(figure[key])                      // square, true, 5
}

// упорядочивание свойств
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
  }
  
  for (let code in codes) {
    console.log(code)                           // 1, 41, 44, 49
  }
