// долг по this

const obj = {
  value: 1,
  // property: () => this.value
  getValue() {
    return this.value;
  },
};

// console.log(obj.property()); // undefined
console.log(obj.getValue()); // 1

// потеря this
const obj2 = {
  value: 3,
  property() {
    return this.value;
  },
};
// раскомментить потом
// const property = obj.property;
// console.log(property()); // TypeError

// еще один пример из учебника потери this
let user = {
  name: "John",
  getName() {
    console.log(this.name);
  },
  bye() {
    console.log('Bye')
  }
};

user.getName() // John
(user.name == 'John' ? user.getName : user.bye)() // TypeError
