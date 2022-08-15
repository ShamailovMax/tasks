// функции

// объявление
function showMessage() {
  console.log("Всем привет!");
}

// вызов функции
showMessage();

// локальные переменные в функции
function showMessage() {
  let message = "Hello";
  console.log(message);
}

// внешние переменные
let firstName = "Василий";

function showMessage() {
  let message = "Hello, " + firstName;
  console.log(message);
}

showMessage(); // Hello, Василиц

// параметры у функции
function showMessage(answer, message) {
  console.log(answer + ":" + message);
}

showMessage("Василий", "Привет :)");

// возврат значения
function multiple(a, b) {
  return a * b;
}

multiple(2, 8); // 16

// вызывать return внутри функции можно несколько раз, например:
function checkCourse(course) {
  if (course > 5) {
    return true;
  } else {
    return confirm(`Тебе еще учиться ${6 - course} лет`);
  }
}

checkCourse(3)