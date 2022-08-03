/* Здесь будет немного кода по теории
Рассмотрим оператор typeof: */

let age = 21
let firstName = 'Max'
let driveCategory = Symbol('B')

console.log(typeof age)                 // number
console.log(typeof firstName)           // string
console.log(typeof driveCategory)       // symbol

// создадим поле без значения и попробуем вернуть его тип данных
let hobby
console.log(typeof hobby)               // undefined

// а теперь присвоим другой переменной null
let phoneNumber = null
console.log(typeof phoneNumber)         // object