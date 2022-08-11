const getUnique = (arr) =>
  arr.find((el) => arr.indexOf(el) === arr.lastIndexOf(el) && console.log(el));
