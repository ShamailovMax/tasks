// link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
  return array.map((i) => `${array.indexOf(i) + 1}: ${i}`);
};
