// долг по объектам

const obj = {
  property: "value",
  "prop erty": 1,
};

console.log(obj.property); // value
console.log(obj["prop erty"]); // 1

console.log(obj[property]); // Ошибка! Property is not defined (ReferenceError)

console.log(obj.береза); // undefined
console.log(null.property); // TypeError
console.log(undefined.property); // TypeError
