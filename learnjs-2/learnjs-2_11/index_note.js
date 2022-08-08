// логические операторы

// логический оператор ИЛИ ||

// всего существует 4 логические комбинации
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (true || false) {
  console.log("it is ok");
}

// у данного условного оператора есть аналогичная запись
// где 1 - это true, а 0 - это false
if (1 || 0) {
  console.log("it is ok");
}

// оператор ИЛИ || используется для проверки, что хотя бы одно из выражений - истинно
// приведем пример:
let hour = 20;
if (hour < 8 || hour > 19) {
  console.log("Магазин закрыт");
}

// еще один пример
let hour = 12;
let isWeekend = true;
if (hour < 8 || hour > 19 || isWeekend) {
  console.log("Магазин закрыт");
}

// оператор ИЛИ возращает первое истинное значение
// пример
let currentUser = null;
let defaultUser = "user-01";
let name = currentUser || defaultUser || "безымянный";
console.log(name);

// логический оператор И &&
// оператор И возращает true, если выполнены ВСЕ условия

// пример
let hour = 12;
let min = 00;
if (hour === 12 && min === 00) {
  console.log("Сейчас полдень");
}

// логический оператор НЕ !
console.log(!true);     // false
console.log(!0);        // true

// двойное отрицание - пример 
console.log(!!1);       // reue
console.log(!!false);   // false
