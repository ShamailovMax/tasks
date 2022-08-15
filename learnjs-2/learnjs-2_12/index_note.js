// оператор нулевого слияния ??

// простейший пример работы оператора слияния - первый операнд не подходит, выводим второй
let user
console.log(user ?? 'Anonimus') // Anonimus

// но если user'у присвоить какое-то значения:
user = 'Елена'
console.log(user ?? 'Anonimus') // Елена

// еще один пример
let firstName = null
let lactName = null
let anotherName = 'IT-Professional'

console.log(firstName ?? lactName ?? anotherName ?? 'Anonimus') // IT-Professional

// Теперь рассмотрим отличие оператора нулевого слияния от логического ИЛИ
let radius = 0

console.log(radius ?? 100); // 0
console.log(radius || 100); // 100

/**
 * ?? вернул первое определенное значение, то есть которое не null и не undefined
 * || вернул первое истинное значение, 0 является ложным, а значит, 100
 */
