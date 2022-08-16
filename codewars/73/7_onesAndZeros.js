// link: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  let indexes = arr.reverse().reduce((a, e, i) => a.push(i) && a, []);
  return arr.reduce((acc, elem, i) => acc + elem * 2 ** indexes[i]);
};
