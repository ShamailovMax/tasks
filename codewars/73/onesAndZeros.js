const binaryArrayToNumber = (arr) => {
  let indexes = arr.reverse().reduce((a, e, i) => a.push(i) && a, []);
  return arr.reduce((acc, elem, i) => acc + elem * 2 ** indexes[i]);
};
